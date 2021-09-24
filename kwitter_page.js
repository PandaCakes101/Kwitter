//YOUR FIREBASE LINKS

const firebaseConfig = {
    apiKey: "AIzaSyCbbFfSIlf302iI-dPhECjrvBTyVPT7a_w",
    authDomain: "fir-social-2437e.firebaseapp.com",
    databaseURL: "https://fir-social-2437e-default-rtdb.firebaseio.com",
    projectId: "fir-social-2437e",
    storageBucket: "fir-social-2437e.appspot.com",
    messagingSenderId: "467197800838",
    appId: "1:467197800838:web:36a3c8b9578cdb5be47c07",
    measurementId: "G-SLQ67FFKEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

username = localStorage.getItem("username");
roomname = localStorage.getItem("roomname");

function send() {
    message = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
        name: username,
        message: message,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();
