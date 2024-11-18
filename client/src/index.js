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
  
    
    return(<h1>hello world</h1>)
  }
}
class App extends React.Component {
  render(){
   
    return(<h1>hello world</h1>)
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)