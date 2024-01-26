import React from 'react'
import { Button, TextField } from '@mui/material';

function List({name , discription, index,list,setList}) {

    function deleteHandler(index){
        let copy = [...list];
        copy.splice(index,1);   // to delete one element of the array
        setList(copy);

    }
    

  return (
    
    <div >  
        
        <TextField sx={{mt: 4, ml: 4}} className='list-name' variant='standard' value={name} />
        <TextField sx={{mt: 4 , ml: 6}} className='list-name' variant='standard' value={discription}/>

        <Button sx={{mt: 4 , ml: 4}} variant='contained' className='btn-dlt' onClick={()=> deleteHandler(index)}>delete</Button> 
    </div>
  )
}

export default List
