import React from 'react'
import ReactDOM from 'react-dom'
var clicks = 0;
var ramenRate = 0;

function loadClicks() {
  const savedClicks = localStorage.getItem("clicks");
  const ramenrate= localStorage.getItem("ramenRate")
  clicks = savedClicks ? JSON.parse(savedClicks) : 0;
  console.log(clicks)
  ramenRate = ramenrate ? JSON.parse(ramenrate) : 0;
  document.getElementById("ramen_count").innerHTML=clicks;
}
class Header extends React.Component {
  render() {
  
    
    return(
      <body>
        <div>
         <h1>Ramen clicker</h1>
      <br/>
      <h1 id="count">ramen count:</h1>
      <br/>
      <h1 id="ramen_count">r</h1>
      <img id="ramen" src="ramen.png" alt="ramen" onclick="clicker()"></img>
      <button onclick="click()" >press</button>
      <button onclick="remove()">reset</button>
    
    <div id="upgrades">
      <button><img src="novice.png" alt="" class="upgrades" onclick="increaseRate()"></img> </button>
      novic
      <br></br>100 ramen
    </div>
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
        <h1>hello world</h1>
      </div>
  )
  }
  
}
const  rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
