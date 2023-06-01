import React from 'react'
import '../styles/App.css';
import img from '../image.jpeg';
import { useState } from 'react';


const App = () => {
  const [height,setHeight]=useState(320);
  const [width,setWidth]=useState(320);

  const hi=((event)=>{
    const y=event.target.value;
    if(y>100 && y<800){
      setHeight(y);
    }
  })

   const wi=((event)=>{
    const y=event.target.value;
    if(y>100 && y<800){
      setWidth(y);
    }
  })




  return (
    <div id="main">
      <img src={img} id="resizable-img" style={{height:`${height}px`,width:`${width}px`}}/>
      <input type="number" id="height-slider" onChange={hi}/>
      <input type="number" id="width-slider" onChange={wi}/>
    </div>
  )
}


export default App;
