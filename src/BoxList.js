import { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList(){
  const [boxes, setBoxes] = useState([]);
  const[form, setForm] = useState({width: '', height: '', backgroundColor: ''})

  function createBox(box){
    setBoxes(oldBoxes => {
      return [...oldBoxes, box];
    })
  }


  return (
    <div>{boxes.map(b => 
        <Box width={b.width} 
            height={b.height} 
            backgroundColor={b.backgroundColor}/>)}
        <NewBoxForm />
    </div>
  )
}

export default BoxList;