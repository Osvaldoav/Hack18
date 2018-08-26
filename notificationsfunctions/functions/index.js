const functions = require('firebase-functions');
const admin = require('firebase-admin');
var fetch = require('node-fetch')


const messages = [{
    to: 'ExponentPushToken[Xs4pdSKOhQw2JeSmkQvGwN]',
    sound: 'default',
    body: 'This comes from firebase',
}];

admin.initializeApp();

exports.createOrder = functions.firestore
    .document('ordenesPendientes/{orderId}')
    .onCreate((snap, context) => {
      // Get an object representing the document
      // e.g. {'name': 'Marie', 'age': 66}
      const newValue = snap.data();

      // access a particular field as you would any JS property
      const name = newValue.id;

      fetch('https://exp.host/--/api/v2/push/send', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(messages)
      });
    
    });
