/* This is the js for 2nd screen (ie. enter room name screen) */ 

var firebaseConfig = {
  apiKey: "AIzaSyAXTDZemPaas9wCYf4wdNtSNJ6QRp283l4",
  authDomain: "snapgram-c148f.firebaseapp.com",
  databaseURL: "https://snapgram-c148f-default-rtdb.firebaseio.com",
  projectId: "snapgram-c148f",
  storageBucket: "snapgram-c148f.appspot.com",
  messagingSenderId: "243680582391",
  appId: "1:243680582391:web:10632a6b8f668fd0d8d1f2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
     
    var UserName = localStorage.getItem("UserName");
    console.log(UserName);
    document.getElementById("RoomUsername").innerHTML = "Welcome " + UserName; 

    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log(Room_names);
 row = "<div class='room_name' id="+Room_names+"onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
 //End code
 });});}
getData();

function AddRoom()
{
RoomName = document.getElementById("RoomName Input").value;
firebase.database().ref("/").child(RoomName).update({ purpose : "adding room name" });
localStorage.setItem("RoomName", RoomName);
console.log(RoomName);
window.location="SnapGramRoom.html";
}

/* To Fix */
function redirect(RoomName)
{
  window.location= SnapGramRoom.html;
  console.log(RoomName);
}
/* To */


function Logout()
{
  localStorage.removeItem("RoomName");
  localStorage.removeItem("user_name");
  window.location="index.html";
} 