import React, { useRef, useState } from 'react'
import {Box, Button, TextField} from '@mui/material' 
import List from './List';



function Task({list , setList}) {
    const [task , setTask] = useState("");
    const [disc , setDisc] = useState("");
   
   

    const addtask =()=>{
    if(task === "" || disc === ""){
      return;
    }

     setList([...list , {task ,disc}]) // ... is called spread operator
     setTask("");
     setDisc("");
    }

    
    
  return (
    <Box sx={{textAlign: 'center' }}>
   
    
      <TextField sx={{mt: 2}} placeholder='Enter your task'  value={task} onChange={(e) => setTask(e.target.value) } />
      <TextField sx={{mt: 2 ,ml: 2}}  placeholder='Description'  value={disc} onChange={(e) => setDisc(e.target.value) }/>

      <Button sx={{mt: 3 ,ml: 2}}  variant='contained' color='success' onClick={addtask}>Add</Button>

      {list.map((item,i)=>(
        <List key={i} name={item.task} discription={item.disc} index={i} list={list} setList={setList} />
      ))}

    </Box>
  )
}

export default Task
