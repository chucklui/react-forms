import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Box from './Box';
import NewBoxForm from './NewBoxForm';


/** BoxList
 * 
 * State:
 * - boxes: [{ id: uuid, width: '100', height: '100', backgroundColor: 'red' }, ...]
 * 
 * App -> BoxList -> (Box, NewBoxForm)
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);


  /** createBox
   * Params:
   * - box: { width: '100', height: '100', backgroundColor: 'red' }
   * 
   * Creates new box with unique id into boxes state
   */
  function createBox(box) {
    const newBox = { ...box, id: uuid() };
    setBoxes(oldBoxes => {
      return [...oldBoxes, newBox];
    })
  }

  /** removeBox
   * Params:
   * - id: uuid
   * 
   * Removes box with matching id from boxes state
   */
  function removeBox(id) {
    setBoxes(boxes.filter(box => box.id !== id));
  }

  return (
    <div className="BoxList">
      <NewBoxForm createBox={createBox} />
      {boxes.map(b =>
        <Box
          key={b.id}
          width={b.width}
          height={b.height}
          backgroundColor={b.backgroundColor}
          removeBox={() => removeBox(b.id)}
        />
      )}
    </div>
  )
}

export default BoxList;