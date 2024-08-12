import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkkPS0QmGmELML1pPGOqeMYsw9ikKZdYY",
    authDomain: "profileprep-67739.firebaseapp.com",
    projectId: "profileprep-67739",
    storageBucket: "profileprep-67739.appspot.com",
    messagingSenderId: "457597445208",
    appId: "1:457597445208:web:2aa9ce44d4e089c2ead62d",
    measurementId: "G-PTPMD7QV0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// SignUp
document.getElementById('registerSubmitBtn').addEventListener('click', () => {
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
    const firstname = document.getElementById('Username').value;

    if (!validateEmail(email)) {
        alert('Invalid email format');
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('User created successfully!');
            // localStorage.setItem('isLoggedIn', 'true');
            checkLoginStatus();
            showlogin(); // Display login form after registration
        })
        .catch((error) => {
            console.error('SignUp Error:', error);
            alert(`Error: ${error.message}`);
        });
});

// Login
document.getElementById('loginSubmitBtn').addEventListener('click', () => {
    const email = document.getElementById('Emaillogin').value;
    const password = document.getElementById('Passwordlogin').value;

    if (!validateEmail(email)) {
        alert('Invalid email format');
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'Courses.html'; // Redirect after successful login
        })
        .catch((error) => {
            console.error('Login Error:', error);
            alert(`Error: ${error.message}`);
        });
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    signOut(auth).then(() => {
        alert('Logged out successfully!');
        localStorage.setItem('isLoggedIn', 'false');
        checkLoginStatus();
        window.location.href = 'index.html'; // Redirect after logout
    }).catch((error) => {
        console.error('Logout Error:', error);
        alert('Logout failed, please try again.');
    });
});

// Forgot Password
document.getElementById('Forgotpassword').addEventListener('click', () => {
    const email = document.getElementById('Emaillogin').value;

    if (!validateEmail(email)) {
        alert('Invalid email format');
        return;
    }

    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Password reset email sent!');
        })
        .catch((error) => {
            console.error('Password Reset Error:', error);
            alert('Failed to send password reset email, please try again.');
        });
});

// Validate Email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}



// UI Functions for Showing Login/Register Forms
function showlogin() {
    document.getElementById("login").style.left = "4px";
    document.getElementById("register").style.right = "-520px";
    document.getElementById("loginBtn").className += " white-btn";
    document.getElementById("registerBtn").className = "btn";
    document.getElementById("login").style.opacity = 1;
    document.getElementById("register").style.opacity = 0;
}

function showregister() {
    document.getElementById("login").style.left = "-510px";
    document.getElementById("register").style.right = "5px";
    document.getElementById("loginBtn").className = "btn";
    document.getElementById("registerBtn").className += " white-btn";
    document.getElementById("login").style.opacity = 0;
    document.getElementById("register").style.opacity = 1;
}



function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'block';
        document.getElementById('profileIcon').style.display = 'flex';
    } else {
        document.getElementById('loginBtn').style.display = 'block';
        document.getElementById('logoutBtn').style.display = 'none';
        document.getElementById('profileIcon').style.display = 'none';
    }
}

// Call the function on page load to check login status
checkLoginStatus();
