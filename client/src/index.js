import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client'
import ramen from './img/ramen.png'
import novice from './img/novice.png'
import  './styles.css'
var clicks = 0;
var ramenRate = 0;
const bodystyle={
  textAlign: "center",
 
}
function increaseRate(){
  if(clicks>=100){
    ramenRate+=1;
    clicks-=100;
  }
  root.render(<App/>);
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
function bigger(){
    document.getElementById("img").style.height="260px";
     document.getElementById("img").style.width="260px";
}
function smaller(){
  document.getElementById("img").style.height="200px";
  document.getElementById("img").style.width="200px";
}
document.addEventListener("DOMContentLoaded", loadClicks);
class Header extends React.Component {
  render() {
 
    
    return(
      <div >
        <a href="./styles.css" rel="stylesheet"></a>
        <div id="upgrades">
          <button class="novice"><img class="novice"src={novice} alt="" style={bodystyle} onClick={increaseRate()}></img> </button>
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
      <img id="img" src={ramen}alt="ramen" value={clicks}onClick={clicker} onMouseDown={bigger} onMouseUp={smaller}></img>
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