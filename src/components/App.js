import React from 'react'
import '../styles/App.css';
import img from '../image.jpeg';
import { useState } from 'react';


const App = () => {
  const [height,setHeight]=useState(320);
  const [width,setWidth]=useState(320);

  const hi=((event)=>{
    const y=event.target.value;
    
      setHeight(y);
    
  })

   const wi=((event)=>{
    const y=event.target.value;
    
      setWidth(y);
    
  })




  return (
    <div id="main">
      <img src={img} id="resizable-img" style={{height:`${height}px`,width:`${width}px`}}/>
      <input type="number" id="height-slider" onChange={hi} min="100" max="800"/>
      <input type="number" id="width-slider" onChange={wi} min="100" max="800"/>
    </div>
  )
}


export default App;
