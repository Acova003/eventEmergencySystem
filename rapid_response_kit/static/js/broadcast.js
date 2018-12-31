// import firebase from 'firebase/app';
// import 'firebase/database';

console.log(firebase);
function setup() {
  var config = {
    apiKey: "AIzaSyCTxPeTycN3vgGG_ctrOilnlge57W3JyXA",
    authDomain: "eventemergencysystem.firebaseapp.com",
    databaseURL: "https://eventemergencysystem.firebaseio.com",
    projectId: "eventemergencysystem",
    storageBucket: "eventemergencysystem.appspot.com",
    messagingSenderId: "925233330590"
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
    return row.phone;
  }).filter(function (phone) {
    return phone.toString().length !== 0;
  })

  fillFormPhonesField(phones);
}

function fillFormPhonesField(phones) {
  $("#numbers").val(phones.join("\n"))
}

function errData(err) {
  console.log('Error!');
  console.log(err)
}
