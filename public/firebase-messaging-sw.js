importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');

 firebase.initializeApp({
   'messagingSenderId': '624325475971'
 });
const messaging = firebase.messaging();

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function(payload) {
  // console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // // Customize notification here
  // var notificationTitle = 'Background Message Title';
  // var notificationOptions = {
    // body: 'Background Message body.',
    // icon: '/firebase-logo.png'
  // };

  //return self.registration.showNotification(notificationTitle,notificationOptions);
  return self.registration.showNotification(payload.notification);
});
// [END background_handler]