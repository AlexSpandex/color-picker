import {useState} from "react"
import "./App.css"

function App() {

  const getColor = localStorage.getItem('color');
  const [color, setColor] = useState(getColor ? getColor : "orange");


  const COLOR = [
    "#F7F9F9", 
    "#BED8D4",
    "#78D5D7",
    "#63D2FF",
    "#2081C3"
  ]

  const changeColor = () => {
    let randNum =  Math.floor(Math.random() * COLOR.length);
   console.log(randNum)
   let color = COLOR[randNum];

   localStorage.setItem('color', color);
   setColor(color);
  }

  return(
    <div className="container" style={{ backgroundColor: color }}>
      <div className="main">
        <div className="bg-color">
          <h1> Background Color: {color} </h1>
          
    </div>
    <div className="button" onClick= {() => changeColor()}> Click me </div>
    </div>
    </div>
  );
}

export default App;