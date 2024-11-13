var clicks = 0;
var ramenRate = 0;

// Load saved clicks from localStorage on page load
function loadClicks() {
    const savedClicks = localStorage.getItem("clicks");
    const ramenrate= localStorage.getItem("ramenRate")
    clicks = savedClicks ? JSON.parse(savedClicks) : 0;
    console.log(clicks)
    ramenRate = ramenrate ? JSON.parse(ramenrate) : 0;
    document.getElementById("ramen_count").innerHTML=clicks;
}
let datatosend = {
   ramenRate:ramenRate,
   clicks:clicks,
    user:"",
    password:""
  };

// Save current clicks count to localStorage
function saveClicks() {
    localStorage.setItem("clicks", JSON.stringify(clicks));
    localStorage.setItem("ramenRate", JSON.stringify(ramenRate));
    datatosend.clicks=clicks;
    console.log("Clicks saved:", clicks);
}

// Initialize clicks on page load
document.addEventListener("DOMContentLoaded", loadClicks);

// Increment clicks on button click, update display, and save to localStorage
function clicker() {
    clicks += 1;
    document.getElementById("ramen_count").innerHTML = clicks;
    saveClicks();
    send_data()
}

// Reset ramen element size (if applicable)
function offclick() {
    document.getElementById("ramen").style.height = "200px";
    document.getElementById("ramen").style.width = "200px";
}

// Increase ramen rate increment value
function increaseRate() {
    ramenRate += 2;
    clicks-=100;
    console.log("Ramen rate increased:", ramenRate);
}

// Reset clicks to zero and update localStorage and display
function resetClicks() {
    clicks = 0;
    saveClicks();
    document.getElementById("ramen_count").innerHTML = clicks;
    console.log("Clicks reset to 0.");
}
function auth(){
    datatosend.user=document.getElementById("username").value
    datatosend.password=document.getElementById("password").value
    fetch('http://localhost:3000/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datatosend),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from server:', data);
    })
    .catch(error => {
        console.error('Error sending data:', error);
    });
}


function send_data(){
  
    
    // Send the data using a POST request
    fetch('http://localhost:3000/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datatosend),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from server:', data);
    })
    .catch(error => {
        console.error('Error sending data:', error);
    });
}
function update() {
    clicks += ramenRate;
    if(document.getElementById("count").innerHTML=="ramen count:"){

        document.getElementById("ramen_count").innerHTML = clicks ;
    }
    saveClicks();
    console.log("Clicks updated with ramen rate:", clicks);
    if(ramenRate!=0){

        send_data()
    }
}

// Run the `update` function every 400ms
setInterval(update, 400);

// Data you want to send to the backend