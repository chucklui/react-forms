import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
  const initialForm = { width: '', height: '', backgroundColor: '' };

  const [boxes, setBoxes] = useState([]);
  const [form, setForm] = useState(initialForm);

  function createBox(box) {
    const newBox = { ...box, id: uuid() };
    setBoxes(oldBoxes => {
      return [...oldBoxes, newBox];
    })
  }


  function handleChange(evt) {
    const { name, value } = evt.target;
    setForm(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    createBox(form);
    setForm(initialForm);
  }


  return (
    <div className="BoxList">
      <NewBoxForm handleSubmit={handleSubmit} handleChange={handleChange} />
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