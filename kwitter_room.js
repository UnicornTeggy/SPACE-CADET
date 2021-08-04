

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDqQTIY185E9YVY0pDdLZ5hFyaOa2cicdI",
  authDomain: "kwitter-38070.firebaseapp.com",
  databaseURL: "https://kwitter-38070-default-rtdb.firebaseio.com",
  projectId: "kwitter-38070",
  storageBucket: "kwitter-38070.appspot.com",
  messagingSenderId: "1042490409765",
  appId: "1:1042490409765:web:3c5e7e4118ce83680a90cc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_room()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";}