function sendSOS() {
    alert("⚠ SOS sent! Authorities will contact you soon.");
}
function shareLocation() {
    navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        alert("Your Location:\nLatitude: " + lat + "\nLongitude: " + lon);
    });
}
// ===============================
// CAMPUS ALERT NETWORK SYSTEM
// ===============================

// Function: Admin sends a campus alert message
function sendCampusAlert() {
    let message = prompt("Enter a campus alert message:");

    if (message && message.trim() !== "") {
        // Store the alert in localStorage
        localStorage.setItem("campusAlertMessage", message);

        alert("📢 Campus alert sent successfully!");
    } else {
        alert("Please enter a valid alert message.");
    }
}


// Function: All users will automatically receive alert on page load
function receiveCampusAlert() {
    let storedMessage = localStorage.getItem("campusAlertMessage");

    if (storedMessage) {
        alert("🚨 CAMPUS ALERT 🚨\n\n" + storedMessage);
    }
}


// Run automatically whenever the page opens
window.onload = receiveCampusAlert;
function complaintBox() {
    window.location.href = "complaint.html";
}
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcd1234"
};
