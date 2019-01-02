// import firebase from 'firebase/app';
// import 'firebase/database';

console.log(firebase);
function setup() {
  var config = {
    apiKey: "your firebase api key",
    authDomain: "your project id",
    databaseURL: "your project url",
    projectId: "your project id",
    storageBucket: "yourprojectid.appspot.com",
    messagingSenderId: "Your data here"
  };

  firebase.initializeApp(config);

}

setup()

database = firebase.database();
var ref = database.ref();

ref.on("value", gotData, errData);


function gotData(snapshot) {
  var rows = Object.values(snapshot.val());

  var phones = rows.map(function (row) {
    return row.phone;                  // phone refers to phone value of each person in Firebase (what we want in firebase)
  }).filter(function (phone) {
    return phone.toString().length !== 0;
  })

  fillFormPhonesField(phones);
}

function fillFormPhonesField(phones) {
  $("#numbers").val(phones.join("\n")) // Formats the values to the specification of Twilio too send a new 
                                       // outgoing message from a Twilio phone number to an outside number, 
                                       // making an HTTP POST to your account's message resource.
}

function errData(err) {
  console.log('Error!');
  console.log(err)
}
