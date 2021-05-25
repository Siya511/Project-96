// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCx4g66qRVhG_QSG4Bwwqr9XEiFrnL_slo",
    authDomain: "kwitter-c2364.firebaseapp.com",
    databaseURL: "https://kwitter-c2364-default-rtdb.firebaseio.com",
    projectId: "kwitter-c2364",
    storageBucket: "kwitter-c2364.appspot.com",
    messagingSenderId: "137854783734",
    appId: "1:137854783734:web:f9071df7977cf690d09cd7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("message").value;
    console.log(msg);
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });
}