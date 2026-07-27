// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnQIA5uxp0jzv8b0hUEow9yBzpBF-ofUI",
    authDomain: "://firebaseapp.com",
    projectId: "my-login-system-e636d",
    storageBucket: "my-login-system-e636d.firebasestorage.app",
    messagingSenderId: "627391470053",
    appId: "1:627391470053:web:a2600bde4b1b93e8dc770c",
    measurementId: "G-WWE3D6SX1K"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Handle Form Submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the page from resetting automatically
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send the credentials to your Firebase backend to sign in
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Success! You are logged in.");
            console.log("Logged in user:", userCredential.user);
        })
        .catch((error) => {
            alert("Login Failed: " + error.message);
        });
});
