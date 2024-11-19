import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client'
import ramen from './img/ramen.png'
import novice from './img/novice.png'
var clicks = 0;
var ramenRate = 0;
const bodystyle={
  textAlign: "center",
  img:hover{
    minwid
  }
}

function clicker(){
  
    clicks += 1;
    saveClicks();
    console.log(":(")
   document.getElementById("ramen_count").value=clicks;
   root.render(<App/>);

}
function saveClicks() {
  localStorage.setItem("clicks", JSON.stringify(clicks));
  localStorage.setItem("ramenRate", JSON.stringify(ramenRate));
  //dataToSend.clicks=clicks;
  //console.log("Clicks saved:", clicks);
}
function loadClicks() {
  const savedClicks = localStorage.getItem("clicks");
  const ramenrate= localStorage.getItem("ramenRate")
  clicks = savedClicks ? JSON.parse(savedClicks) : 0;
  console.log(clicks)
  ramenRate = ramenrate ? JSON.parse(ramenrate) : 0;
 // document.getElementById("ramen_count").innerHTML=clicks;
}

document.addEventListener("DOMContentLoaded", loadClicks);
const sizestyle={
  height:200 ,
 width:200 
}
class Header extends React.Component {
  render() {
 
    
    return(
      <div >
        <div id="upgrades">
          {/* <button><img src={novice} alt="" style={sizestyle} onClick={increaseRate()}></img> </button> */}
          <br></br>
          novice  
          <br></br>100 ramen
        </div>
        <div style={bodystyle}>
         <h1>Ramen clicker</h1>
      <br/>
      <h1 id="count" >ramen count:{clicks}</h1>
      <br/>
      <h1 id="ramen_count">r</h1>
      <img style={sizestyle} src={ramen}alt="ramen" value={clicks}onClick={clicker}></img>
      
    </div>
          </div>
    
    
    )
  }
}
class App extends React.Component {
  render(){
   
    return(
      <div>

        <Header/>
        
      </div>
  )
}

}

const  rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);


root.render(<App/>);