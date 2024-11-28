import React from 'react'
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client'
import ramen from './img/ramen.png'
import novice from './img/novice.png'
import './styles.css'
let datatosend = {
  ramenRate:ramenRate,
  clicks:clicks,
  user:"",
  password:"",
 };
var clicks = 0;
var ramenRate = 0;
const bodystyle = {
  textAlign: "center",

}
let user="";
let password="";
function update() {
  clicks += ramenRate;
  document.getElementById("ramen_count").innerHTML = clicks;
  saveClicks();
  datatosend.clicks=clicks
  datatosend.ramenRate=ramenRate
  datatosend.user=user;
  datatosend.password=password;
  send_data();

}
// setInterval(send_data,1000/60)
function send_data(){ 
    
  // Send the data using a POST request
  fetch('https://first-vite.onrender.com/api', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
         'Access-Control-Allow-Origin':'*'
    },
    body: JSON.stringify(datatosend),
})
.then((res) => res.json())
.then(data => {
    console.log('Response from server:', data);
})
.catch(error => {
    console.error('Error sending data:', error)
});
}
// Run the `update` function every 400ms
setInterval(update, 400);
function increaseRate() {
  if (clicks >= 100) {
    ramenRate += 1;
    clicks -= 100;
  }

}
function clicker() {
  clicks += 1;
  saveClicks();
  document.getElementById("ramen_count").innerHTML = clicks;
}
function saveClicks() {
  localStorage.setItem("clicks", JSON.stringify(clicks));
  localStorage.setItem("ramenRate", JSON.stringify(ramenRate));
  //dataToSend.clicks=clicks;
  //console.log("Clicks saved:", clicks);
}
function A() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    
      fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datatosend),
    })
    .then((res) => res.json())
    .then((data) => setData(datatosend))
    .then(response => response.json())
    .then(data => {
        console.log('Response from server:', data);
    })
    .catch(error => {
        console.error('Error sending data:', error)
    });
  }, []);

  return (
    <div className="App">
     
        
        <p>o</p>
  
    </div>
  );
}

function loadClicks() {
  const savedClicks = localStorage.getItem("clicks");
  const ramenrate = localStorage.getItem("ramenRate")
  clicks = savedClicks ? JSON.parse(savedClicks) : 0;
  ramenRate = ramenrate ? JSON.parse(ramenrate) : 0;
  // document.getElementById("ramen_count").innerHTML=clicks;
}
function bigger() {
  document.getElementById("img").style.height = "260px";
  document.getElementById("img").style.width = "260px";
}
function smaller() {
  
  document.getElementById("img").style.height = "200px";
  document.getElementById("img").style.width = "200px";
}
loadClicks()
class Header extends React.Component {
  
  render() {


    return (
      <div >
        <a href="./styles.css" rel="stylesheet"></a>
          <h1>user</h1>
            <br></br>
            <input value={user}></input>
            <br></br>
            <h1>password</h1>
            <br></br>
            <input value={password}></input>
        <div id="upgrades">
          <button ><img id="novice" src={novice} alt="" style={bodystyle} onClick={increaseRate}></img> </button>
          <br></br>
          novice
          <br></br>100 ramen
        </div>   
        <div style={bodystyle}>
          <h1>Ramen clicker</h1>

          <h1 id="count" value={clicks}>ramen count</h1>
          <br></br>
          <h1 id="ramen_count"></h1>
          <img id="img" src={ramen} alt="ramen"  onClick={clicker} onMouseDown={bigger} onMouseUp={smaller}></img>
        </div>

      </div>


    )
  }
}
class App extends React.Component {
  render() {

    return (
      <div>

        <Header />
        <A/>
      </div>
    )
  }

}

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);


root.render(<App />);