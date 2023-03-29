importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyAAETyJlBnNRkm4rPJn4Jiebn5xmbvzfQg",
    authDomain: "marketo-webhooks.firebaseapp.com",
    projectId: "marketo-webhooks",
    storageBucket: "marketo-webhooks.appspot.com",
    messagingSenderId: "1055055539691",
    appId: "1:1055055539691:web:0f4c70586ab562cefbbdae"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging()

messaging.setBackgroundMessagingHandler(function (payload) {
    console.log(payload)
})