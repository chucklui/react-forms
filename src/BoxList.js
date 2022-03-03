import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function createBox(box) {
    const newBox = { ...box, id: uuid() };
    setBoxes(oldBoxes => {
      return [...oldBoxes, newBox];
    })
  }



  return (
    <div className="BoxList">
      <NewBoxForm createBox={createBox} />
      {boxes.map(b =>
        <Box
          width={b.width}
          height={b.height}
          backgroundColor={b.backgroundColor} />
      )}
    </div>
  )
}

export default BoxList;