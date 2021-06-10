var admin = require("firebase-admin")


var serviceAccount = require("./firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var topic = 'topicName';



var payload = {
  notification: {
    title: "Teste",
    body: "Enviado pelo node"
  },
  topic
};

// Send a message to devices subscribed to the provided topic.
admin.messaging().send(payload)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });