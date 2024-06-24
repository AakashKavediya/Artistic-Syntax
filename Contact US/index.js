const firebaseConfig = {
    apiKey: "AIzaSyD7WD1Ns0SPTA0lI5TnA1ICMw1pgzrU7WY",
    authDomain: "artistic-syntax-35ef0.firebaseapp.com",
    databaseURL: "https://artistic-syntax-35ef0-default-rtdb.firebaseio.com",
    projectId: "artistic-syntax-35ef0",
    storageBucket: "artistic-syntax-35ef0.appspot.com",
    messagingSenderId: "435159059795",
    appId: "1:435159059795:web:ed29ca24fe062d9cf0a5a6",
    measurementId: "G-TDDDY32GJZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Referance for database

var contactDB = firebase.database.ref("contact");

document.getElementById("contact").addEventListener("submit", submitform);

function submitform(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var phone = getElementVal("phone");
    var email = getElementVal("mail");
    var message = getElementVal("message");

    console.log(name, phone, email, message);
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// document.getElementById("signup").addEventListener("submit", submitform);

// function submitform(e) {
//     e.preventDefault();

//     const name = getElementVal("name");
//     const phone = getElementVal("phone");
//     const email = getElementVal("mail");
//     const message = getElementVal("message");

//     // Save message
//     saveMessage(name, phone, email, message);

//     // Show alert or log success
//     console.log("Form submitted", { name, phone, email, message });
//     alert("Your data has been stored in the Firebase database.");
// }

// function saveMessage(name, phone, email, message) {
//     const signupDB = ref(database, "signup");
//     const newSignup = push(signupDB);
//     set(newSignup, {
//         Name: name,
//         Phone: phone,
//         Email: email,
//         Message: message
//     });
// }

// const getElementVal = (id) => {
//     return document.getElementById(id).value;
// };