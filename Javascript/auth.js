const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const authMessage = document.querySelector('.auth-message');

// SIGNUP
if (signupForm) {

    signupForm.addEventListener('submit', e => {
        e.preventDefault();

        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            authMessage.textContent = 'Passwords do not match';
            return;
        }

        const user = {
            fullname,
            email,
            phone,
            password
        };

        localStorage.setItem('foodUser', JSON.stringify(user));

        authMessage.textContent ='Account created successfully';

        setTimeout(() => {
            window.location.href ='login.html';
        }, 1500);
    });
}

// LOGIN
if (loginForm) {
    
    loginForm.addEventListener('submit', e => {
        e.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const savedUser = JSON.parse(localStorage.getItem('foodUser')); 

        if (!savedUser) {
            authMessage.textContent = 'No account found';
            return;
        }
        if (
            email === savedUser.email &&
            password === savedUser.password
        ) {

            localStorage.setItem('loggedIn','true');
            authMessage.textContent = 'Login successful';

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);

        } else {
            authMessage.textContent = 'Invalid email or password';
        }
    });
}