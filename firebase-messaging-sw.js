importScripts('https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/9.17.2/firebase-messaging.js')

firebase.initializeApp({
    messagingSenderId: "1055055539691"
})

const messaging = firebase.messaging()

messaging.setBackgroundMessagingHandler(function (payload) {
    console.log(payload)
})