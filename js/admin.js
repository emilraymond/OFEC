/**
 * admin.js - Logic for Auth and Management
 */

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            console.log("Attempting login for:", email);
            // Future step: Firebase signInWithEmailAndPassword(auth, email, password)
            alert("Login logic triggered! Ready for Firebase integration.");
        });
    }
});

function handleForgotPassword() {
    const lang = document.documentElement.lang;
    const msg = lang === 'ar' ? "يرجى إدخال بريدك الإلكتروني لاستعادة كلمة المرور." : "Please enter your email to reset your password.";
    const email = prompt(msg);
    
    if (email) {
        console.log("Reset requested for:", email);
        // Future step: Firebase sendPasswordResetEmail(auth, email)
        alert(lang === 'ar' ? "تم إرسال تعليمات الاستعادة إلى بريدك." : "Reset instructions sent to your email.");
    }
}