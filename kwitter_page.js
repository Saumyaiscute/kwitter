const firebaseConfig = {
      apiKey: "AIzaSyBLKTrFIZ_f9c39363511dj-Y8ZQNKXetg",
      authDomain: "kwitter-ef65a.firebaseapp.com",
      projectId: "kwitter-ef65a",
      storageBucket: "kwitter-ef65a.appspot.com",
      messagingSenderId: "110959129497",
      appId: "1:110959129497:web:123b006bb8d2400c60d908",
      measurementId: "G-3LB07HR0K9"
    };
    firebase.initializeApp(firebaseConfig);

//Start code
user_name=localStorage.getItem("user_name")
user_name=localStorage.getItem("room_name")

function send(){
      mesg=document.getElementById("message").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:mesg,
            like:0
});

document.getElementById("message").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;

      name=message_data["name"]
      message=message_data["message"]
      like=message_data["like"]    
      
      

      name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>"; message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"; row = name_with_tag + message_with_tag +like_button + span_with_tag; document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();