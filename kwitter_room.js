
firebaseConfig = {
      apiKey: "AIzaSyBLKTrFIZ_f9c39363511dj-Y8ZQNKXetg",
      authDomain: "kwitter-ef65a.firebaseapp.com",
      projectId: "kwitter-ef65a",
      storageBucket: "kwitter-ef65a.appspot.com",
      messagingSenderId: "110959129497",
      appId: "1:110959129497:web:123b006bb8d2400c60d908",
      measurementId: "G-3LB07HR0K9"
    };
    firebase.initializeApp(firebaseConfig);
    
    var user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name;

    function addRoom() {
      var room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"add room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div> <hr>"
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();


function redirectToRoomName(name){
 localStorage.setItem("room_name", name);
 window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}