// Admin script to review and approve/reject wishes in 'wishes_pending'
console.log('🔧 admin.js loading...');

let adminDb = null;

function escapeHtml(text) {
    return String(text || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function initializeFirebaseAdmin() {
    try {
        if (typeof firebase === 'undefined') {
            console.error('Firebase SDK not loaded');
            document.getElementById('status').textContent = '❌ Firebase SDK chưa được tải.';
            return false;
        }

        if (typeof weddingConfig === 'undefined' || !weddingConfig.firebase) {
            console.error('weddingConfig.firebase not found');
            document.getElementById('status').textContent = '❌ Thiếu cấu hình Firebase (config.js).';
            return false;
        }

        if (!firebase.apps || firebase.apps.length === 0) {
            firebase.initializeApp(weddingConfig.firebase);
        }

        adminDb = firebase.firestore();
        document.getElementById('status').textContent = '⏳ Đã kết nối Firestore. Vui lòng đăng nhập.';
        return true;
    } catch (err) {
        console.error('Error initializing Firebase admin:', err);
        document.getElementById('status').textContent = '❌ Lỗi khi kết nối Firebase: ' + (err.message || err);
        return false;
    }
}

async function approveWish(docId, data) {
    try {
        const payload = {
            guestName: data.guestName || data.name || 'Khách vô danh',
            wishes: data.wishes || data.message || '',
            createdAt: data.createdAt || firebase.firestore.Timestamp.now(),
            approved: true
        };

        await adminDb.collection('wishes').add(payload);
        await adminDb.collection('wishes_pending').doc(docId).delete();
        console.log('Approved and moved wish:', docId);
    } catch (err) {
        console.error('Error approving wish', docId, err);
        alert('Lỗi khi duyệt lời chúc: ' + (err.message || err));
    }
}

async function rejectWish(docId) {
    try {
        await adminDb.collection('wishes_pending').doc(docId).delete();
        console.log('Rejected (deleted) wish:', docId);
    } catch (err) {
        console.error('Error rejecting wish', docId, err);
        alert('Lỗi khi từ chối lời chúc: ' + (err.message || err));
    }
}

function renderPendingList(snapshot) {
    const container = document.getElementById('pendingList');
    if (!container) return;
    if (!snapshot || snapshot.size === 0) {
        container.innerHTML = '<p style="color:#999; text-align:center; padding:20px">🎀 Không có lời chúc chờ duyệt.</p>';
        return;
    }

    const html = [];
    snapshot.forEach(doc => {
        const d = doc.data();
        const time = d.createdAt && d.createdAt.toDate ? d.createdAt.toDate().toLocaleString('vi-VN') : 'Vừa gửi';
        const name = escapeHtml(d.guestName || d.name || 'Khách vô danh');
        const text = escapeHtml(d.wishes || d.message || '');

        html.push(`
            <div class="wish-card" id="wish-${doc.id}">
                <div style="display:flex;justify-content:space-between;align-items:center">
                    <div style="font-weight:600;color:#c41e3a">${name}</div>
                    <div class="wish-meta">${time}</div>
                </div>
                <div style="margin-top:8px;color:#333;white-space:pre-wrap">${text}</div>
                <div class="wish-actions">
                    <button class="btn btn-approve" data-id="${doc.id}">Duyệt</button>
                    <button class="btn btn-reject" data-id="${doc.id}">Từ chối</button>
                </div>
            </div>
        `);
    });

    container.innerHTML = html.join('');

    // Attach handlers
    container.querySelectorAll('.btn-approve').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            const docRef = await adminDb.collection('wishes_pending').doc(id).get();
            if (!docRef.exists) return alert('Lời chúc không tồn tại.');
            const data = docRef.data();
            if (!confirm('Duyệt lời chúc này và cho hiển thị công khai?')) return;
            await approveWish(id, data);
        });
    });

    container.querySelectorAll('.btn-reject').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            if (!confirm('Bạn có chắc muốn từ chối (xóa) lời chúc này?')) return;
            await rejectWish(id);
        });
    });
}

function listenPending() {
    if (!adminDb) return;
    // Only listen when user is authenticated (server rules check request.auth)
    adminDb.collection('wishes_pending').orderBy('createdAt', 'desc').onSnapshot(snapshot => {
        renderPendingList(snapshot);
    }, err => {
        console.error('Error listening pending wishes:', err);
        document.getElementById('status').textContent = '❌ Lỗi khi tải dữ liệu: ' + (err.message || err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const ok = initializeFirebaseAdmin();
    if (!ok) return;

    const signInBtn = document.getElementById('signInBtn');
    const signOutBtn = document.getElementById('signOutBtn');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');

    // Auth state listener
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            document.getElementById('status').textContent = '✅ Đã đăng nhập: ' + (user.email || user.uid);
            // show sign-out button
            signOutBtn.style.display = 'inline-block';
            signInBtn.style.display = 'none';
            // start listening to pending wishes
            listenPending();
        } else {
            document.getElementById('status').textContent = '⏳ Chưa đăng nhập. Vui lòng đăng nhập bằng tài khoản admin.';
            signOutBtn.style.display = 'none';
            signInBtn.style.display = 'inline-block';
            // clear pending list
            document.getElementById('pendingList').innerHTML = '';
        }
    });

    signInBtn.addEventListener('click', async () => {
        const email = emailInput.value.trim();
        const pass = passwordInput.value;
        if (!email || !pass) return alert('Vui lòng nhập email và mật khẩu');
        try {
            document.getElementById('status').textContent = '⏳ Đang đăng nhập...';
            await firebase.auth().signInWithEmailAndPassword(email, pass);
            document.getElementById('status').textContent = '✅ Đăng nhập thành công';
        } catch (err) {
            console.error('Auth error', err);
            document.getElementById('status').textContent = '❌ Lỗi đăng nhập: ' + (err.message || err);
            alert('Đăng nhập thất bại: ' + (err.message || err));
        }
    });

    signOutBtn.addEventListener('click', async () => {
        try {
            await firebase.auth().signOut();
            document.getElementById('status').textContent = '✅ Đã đăng xuất.';
        } catch (err) {
            console.error('Sign out error', err);
        }
    });

    document.getElementById('refreshBtn').addEventListener('click', () => {
        document.getElementById('status').textContent = '⏳ Làm mới...';
        // Reattach listener simply by reloading page data
        if (!adminDb) return document.getElementById('status').textContent = '❌ Firestore chưa sẵn sàng.';
        adminDb.collection('wishes_pending').orderBy('createdAt','desc').get().then(snap => {
            renderPendingList(snap);
            document.getElementById('status').textContent = '✅ Đã làm mới.';
        }).catch(err => {
            console.error(err);
            document.getElementById('status').textContent = '❌ Lỗi khi làm mới.';
        });
    });
});

console.log('🔧 admin.js ready');
