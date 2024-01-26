import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Task from './components/Task'

import './App.css'
import Emptymsg from './components/Emptymsg'

function App() {
  const [list, setList] = useState([]);

 
 
  return (
    <div>
      <Navbar/>
      <Task list={list}  setList={setList}/>
     
      {list.length === 0 &&
       <Emptymsg/>
       }
 
    </div>


  )
  
}

export default App
