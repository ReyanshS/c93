// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDojVnqhZWfeUmKGGg-Loz6gkje41p_448",
  authDomain: "kwitter-b4e3d.firebaseapp.com",
  projectId: "kwitter-b4e3d",
  storageBucket: "kwitter-b4e3d.appspot.com",
  messagingSenderId: "990676887830",
  appId: "1:990676887830:web:7cb4492f286298d7d58837"
};
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
