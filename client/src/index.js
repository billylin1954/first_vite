import React from 'react'
import ReactDOM from 'react-dom'
import ramen from './img/ramen.png'
import novice from './img/novice.png'
var clicks = 0;
var ramenRate = 0;
const bodystyle={
  textAlign: "center",
}
function loadClicks() {
  const savedClicks = localStorage.getItem("clicks");
  const ramenrate= localStorage.getItem("ramenRate")
  clicks = savedClicks ? JSON.parse(savedClicks) : 0;
  console.log(clicks)
  ramenRate = ramenrate ? JSON.parse(ramenrate) : 0;
  document.getElementById("ramen_count").innerHTML=clicks;
}
document.addEventListener("DOMContentLoaded", loadClicks);
const sizestyle={
  height:200 ,
 width:200 
}
class Header extends React.Component {
  render() {
  
    
    return(
      <body >
        <div id="upgrades">
          <button><img src={novice} alt="" style={sizestyle}class="upgrades" onclick="increaseRate()"></img> </button>
          <br></br>
          novice  
          <br></br>100 ramen
        </div>
        <div style={bodystyle}>
         <h1>Ramen clicker</h1>
      <br/>
      <h1 id="count">ramen count:</h1>
      <br/>
      <h1 id="ramen_count">r</h1>
      <img style={sizestyle} src={ramen}alt="ramen" onclick="clicker()"></img>
      <button onclick="click()" >press</button>
      <button onclick="remove()">reset</button>
    
    </div>
          </body>
    
    
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
ReactDOM.render(<App />, rootElement)
