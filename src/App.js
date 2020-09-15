import React, {useState} from 'react';
import {Message} from './Message.js'

import './App.css';

export default function App() {
  //..variable..setter...........
  let[counter, setCounter] = useState(1)
  // Data indside useState() cannot be saved. when the browser reload it will go to its initial state
  let[isMorning, setMorning]= useState(true);
  
  return (
    <div className={`box ${isMorning ? 'daylight' : ''}`}>
    <h1>Good {isMorning ? 'Morning' : 'Eveninig'}</h1>
    <Message count={counter}/>
     <br/> <hr/>
     <button onClick={()=> setCounter(++counter)}>Update Counter</button>

     <br/>

     <button onClick={()=>setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}

//`box ${isMorning ? 'daylight' : ''}'}... This is backtick opreator which is in ES6.
// To set opposite of any value . if it is True then it will make it false, for false there will be true.
 


