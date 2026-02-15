/**
 * FIREBASE WISHES MANAGEMENT
 * Sổ lời chúc - Gửi lời chúc và hiển thị lời chúc
 */

console.log('🔵 Wishes.js loading...');

let db = null;

// Helper function to sanitize HTML
function escapeHtml(text) {
    return String(text || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Initialize Firebase
function initializeFirebase() {
    console.log('🚀 Initializing Firebase...');
    
    try {
        if (typeof firebase === 'undefined') {
            console.error('❌ Firebase SDK (compat) NOT loaded. Check script tags in index.html');
            return false;
        }
        console.log('✅ Firebase SDK found');

        if (typeof weddingConfig === 'undefined') {
            console.error('❌ weddingConfig NOT found. Make sure config.js is loaded before wishes.js');
            return false;
        }
        console.log('✅ Config found');

        if (!weddingConfig.firebase) {
            console.error('❌ weddingConfig.firebase NOT configured');
            return false;
        }
        console.log('✅ Firebase config found:', {
            projectId: weddingConfig.firebase.projectId,
            authDomain: weddingConfig.firebase.authDomain
        });

        if (!firebase.apps || firebase.apps.length === 0) {
            firebase.initializeApp(weddingConfig.firebase);
            console.log('✅ Firebase app initialized');
        } else {
            console.log('✅ Firebase app already initialized');
        }

        db = firebase.firestore();
        console.log('✅ Firestore database connected');
        return true;
    } catch (err) {
        console.error('❌ Firebase init error:', err);
        return false;
    }
}

// Load and display wishes from Firestore
function loadAndDisplayWishes() {
    console.log('📚 Loading wishes from Firestore...');
    
    if (!db) {
        console.error('❌ Firestore chưa được khởi tạo');
        return;
    }

    const container = document.querySelector('.wishes-list');
    if (!container) {
        console.error('❌ Container .wishes-list NOT found in HTML');
        return;
    }
    console.log('✅ Container found');

    try {
        db.collection('wishes')
            .orderBy('createdAt', 'desc')
            .limit(100)
            .onSnapshot(snapshot => {
                console.log(`📖 Loaded ${snapshot.docs.length} wishes`);
                const wishes = [];
                
                snapshot.forEach(doc => {
                    const data = doc.data();
                    if (data.createdAt && typeof data.createdAt.toDate === 'function') {
                        data.createdAt = data.createdAt.toDate();
                    }
                    wishes.push({ id: doc.id, ...data });
                });

                if (wishes.length === 0) {
                    container.innerHTML = '<p style="color:#999; text-align:center; padding:20px;">🎀 Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc!</p>';
                    return;
                }

                container.innerHTML = wishes.map(wish => {
                    const time = wish.createdAt instanceof Date 
                        ? wish.createdAt.toLocaleString('vi-VN', { 
                            year: 'numeric', 
                            month: '2-digit', 
                            day: '2-digit', 
                            hour: '2-digit', 
                            minute: '2-digit' 
                        })
                        : 'Vừa gửi';
                    
                    const guestName = escapeHtml(wish.guestName || wish.name || 'Khách vô danh');
                    const wishText = escapeHtml(wish.wishes || wish.message || '');

                    return `
                        <div style="
                            background: linear-gradient(135deg, rgba(196, 30, 58, 0.05) 0%, rgba(255, 255, 255, 0.5) 100%);
                            padding: 15px;
                            border-radius: 12px;
                            border-left: 4px solid #c41e3a;
                            margin-bottom: 12px;
                            box-shadow: 0 2px 8px rgba(196, 30, 58, 0.1);
                            animation: slideInUp 0.5s ease-out;
                        ">
                            <div style="
                                font-weight: 600;
                                color: #c41e3a;
                                margin-bottom: 8px;
                                font-size: 16px;
                            ">💝 ${guestName}</div>
                            <div style="
                                color: #333;
                                line-height: 1.5;
                                margin-bottom: 8px;
                                font-size: 15px;
                            ">${wishText}</div>
                            <div style="
                                font-size: 12px;
                                color: #999;
                                font-style: italic;
                            ">${time}</div>
                        </div>
                    `;
                }).join('');

            }, err => {
                console.error('❌ Firestore error loading wishes:', err);
                console.error('Error code:', err.code);
                console.error('Error message:', err.message);
                container.innerHTML = `<p style="color:#c00; text-align:center;">⚠️ Lỗi tải lời chúc:<br/>${escapeHtml(err.message)}</p>`;
            });
    } catch (err) {
        console.error('❌ JavaScript error in loadAndDisplayWishes:', err);
    }
}

// Submit wish to Firestore (goes to pending for approval)
async function submitWish(name, message) {
    console.log('💌 Submitting wish to pending...');
    
    if (!db) {
        console.error('❌ Firestore not initialized');
        alert('❌ Hệ thống chưa sẵn sàng. Vui lòng làm mới trang.');
        return false;
    }

    if (!message || !message.trim()) {
        console.warn('⚠️ Empty message');
        alert('🎀 Vui lòng nhập lời chúc trước khi gửi.');
        return false;
    }

    const maxLength = 300;
    if (message.length > maxLength) {
        console.warn(`⚠️ Message too long: ${message.length} > ${maxLength}`);
        alert(`⚠️ Lời chúc quá dài. Tối đa ${maxLength} ký tự.`);
        return false;
    }

    try {
        console.log('📤 Adding to wishes_pending for admin approval...');
        const result = await db.collection('wishes_pending').add({
            guestName: (name && name.trim()) || 'Khách vô danh',
            wishes: message.trim(),
            createdAt: firebase.firestore.Timestamp.now(),
            status: 'pending',
            approved: false
        });
        console.log('✅ Wish submitted for approval with ID:', result.id);
        return true;
    } catch (err) {
        console.error('❌ Error submitting wish:', err);
        console.error('Error code:', err.code);
        console.error('Error message:', err.message);
        throw err;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('\n========== WISHES SYSTEM INITIALIZATION ==========');
    console.log('🕐 DOMContentLoaded fired');
    
    // Initialize Firebase
    if (!initializeFirebase()) {
        console.error('❌ Cannot initialize Firebase');
        const container = document.querySelector('.wishes-list');
        if (container) {
            container.innerHTML = '<p style="color:#c00; text-align:center;">❌ Lỗi kết nối Firebase.<br/>Vui lòng kiểm tra console.</p>';
        }
        return;
    }

    console.log('✅ Firebase initialized successfully');

    // Load wishes
    console.log('📚 Setting up wishes listener...');
    loadAndDisplayWishes();

    // Setup form submission
    const form = document.getElementById('wish-form');
    if (!form) {
        console.error('❌ Form #wish-form NOT found in HTML');
        return;
    }

    console.log('✅ Form found, attaching submit handler');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('📝 Form submitted');
        
        const name = (form.elements['name']?.value || '').trim();
        const message = (form.elements['message']?.value || '').trim();
        const btn = form.querySelector('button[type="submit"]');
        
        console.log('Form values:', {
            name: name || '(empty)',
            messageLength: message.length,
            button: btn ? 'found' : 'NOT found'
        });

        if (!btn) {
            console.error('❌ Submit button not found');
            return;
        }

        try {
            btn.disabled = true;
            btn.textContent = '⏳ Đang gửi...';
            console.log('Button set to loading state');

            const success = await submitWish(name, message);
            
            if (success) {
                console.log('✅ Wish submitted, showing success state');
                const originalText = '💌 Gửi Lời Chúc';
                btn.textContent = '✅ Chờ duyệt!';
                btn.style.background = '#f39c12';
                
                form.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                    console.log('Button reset to normal state');
                }, 2000);
            }
        } catch (err) {
            console.error('❌ Error in submit handler:', err);
            alert('❌ Gửi lời chúc thất bại. Vui lòng thử lại.\n\nLỗi: ' + err.message);
            btn.textContent = '💌 Gửi Lời Chúc';
            btn.disabled = false;
        }
    });

    console.log('================================================\n');
});

console.log('🟢 Wishes.js loaded successfully');
