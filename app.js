// 🔥 Firebase Initialize
const app = firebase.initializeApp(firebaseConfig);

// 🔥 Firestore Database Initialize
const db = firebase.firestore();

// Example: Data Save करना (Testing)
function saveData() {
    db.collection("test").add({
        name: "User",
        time: new Date()
    })
    .then(() => {
        console.log("Data Successfully Added!");
    })
    .catch(error => {
        console.error("Error: ", error);
    });
}

// Try function call
saveData();
// Your Firebase Config
const firebaseConfig = {
    apiKey: "XXXXXXXXXX",
    authDomain: "XXXX.firebaseapp.com",
    projectId: "XXXX",
    storageBucket: "XXXX.appspot.com",
    messagingSenderId: "123456",
    appId: "1:123456:web:abcd123"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 🔥 SOS Button Logic
document.getElementById("sosBtn").addEventListener("click", () => {

    if (!navigator.geolocation) {
        alert("Location not supported");
        return;
    }

    navigator.geolocation.getCurrentPosition((pos) => {

        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;
        let time = new Date();

        db.collection("SOS_Alerts").add({
            latitude: lat,
            longitude: lon,
            timestamp: time
        })
        .then(() => {
            alert("🚨 SOS Alert Sent Successfully!");
        })
        .catch((error) => {
            alert("Error sending SOS: " + error);
        });

    }, () => {
        alert("Location permission denied!");
    });

});
function sendAlert() {
    let msg = document.getElementById("alertMessage").value;

    db.collection("Broadcast_Alerts").add({
        alertMessage: msg,
        time: new Date(),
        sender: "Admin"
    }).then(() => {
        alert("Broadcast sent successfully!");
    });
}
