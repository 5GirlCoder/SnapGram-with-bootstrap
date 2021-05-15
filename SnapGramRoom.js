/* This js is for the room screen */ 

var firebaseConfig1 = {
  apiKey: "AIzaSyAXTDZemPaas9wCYf4wdNtSNJ6QRp283l4",
  authDomain: "snapgram-c148f.firebaseapp.com",
  databaseURL: "https://snapgram-c148f-default-rtdb.firebaseio.com",
  projectId: "snapgram-c148f",
  storageBucket: "snapgram-c148f.appspot.com",
  messagingSenderId: "243680582391",
  appId: "1:243680582391:web:10632a6b8f668fd0d8d1f2"
}; 
// Initialize Firebase
firebase.initializeApp(firebaseConfig1);

  var UserName = localStorage.getItem("UserName");
  var RoomName = localStorage.getItem("RoomName"); 

  function getData() { firebase.database().ref("/"+RoomName).on('value', function(snapshot) { document.getElementById("MSGoutput").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    //Start Code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['name'];
Message = message_data['message'];
Likes = message_data['likes'];
Name_with_tag = "<h4 class='NameClass'>"+Name+"</h4>";
Message_with_tag = "<h4 class='message'>"+Message+"</h4>";
Like_with_button = "<button onclick='UpdateLike(this.id)' class='like_button' id="+firebase_message_id+" value="+Likes+">";
   span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>                Like:  "+Likes+"</span></button><hr>";

row = Name_with_tag + Message_with_tag + Like_with_button + span_with_tag;
document.getElementById("MSGoutput").innerHTML += row;
//End Code
 } });  }); }
getData();   

function Send()
{
  console.log("comming in send()");
  MSG = document.getElementById("MSG").value;
  firebase.database().ref(RoomName).push(
    {
      message:MSG,
      name:UserName,
      likes:0
    });
  document.getElementById("MSG").value = " ";
}

function Logout() 
{
  localStorage.removeItem("RoomName");
  localStorage.removeItem("UserName");
  window.location="index.html";
}

function UpdateLike(message_id)
{
      console.log("Clicked on like button -" + message_id);
      Button_id = message_id;
      Likes = document.getElementById(Button_id).value;
      Updated_Likes = Number(Likes) + 1;
      console.log(Updated_Likes);
      firebase.database().ref(RoomName).child(message_id).update({
            
            likes:Updated_Likes
      });
}
