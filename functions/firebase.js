var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyBp1FTZ9YzezdT-NpyJsctaAnzeZ5zkWPY",
    authDomain: "larnr-academy.firebaseapp.com",
    databaseURL: "https://larnr-academy.firebaseio.com",
    projectId: "larnr-academy",
    storageBucket: "larnr-academy.appspot.com",
    messagingSenderId: "123605525695"
};
firebase.initializeApp(config);


// I can access database from here
var admin = require("firebase-admin");
var serviceAccount = require("./service-key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    authDomain: "larnr-academy.firebaseapp.com",
    storageBucket: "larnr-academy.appspot.com",
    databaseURL: "https://larnr-academy.firebaseio.com",
    messagingSenderId: "123605525695"
});

module.exports = admin;