
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBdy425ctLgClTEJrMCPJnZLIwaGBOXYPQ",
      authDomain: "kwitter2-995d7.firebaseapp.com",
      databaseURL: "https://kwitter2-995d7-default-rtdb.firebaseio.com",
      projectId: "kwitter2-995d7",
      storageBucket: "kwitter2-995d7.appspot.com",
      messagingSenderId: "819795410841",
      appId: "1:819795410841:web:270d3a06b3ef91bb31dd08"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();




