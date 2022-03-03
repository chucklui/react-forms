import { useState } from 'react';

function NewBoxForm({ createBox }) {
  const initialForm = { width: '', height: '', backgroundColor: '' };
  const [form, setForm] = useState(initialForm);

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="NewBoxForm-width">Width</label>
      <input 
        id="NewBoxForm-width" 
        name="width" 
        type="text" 
        value={form.width} 
        onChange={handleChange}
      />

      <label htmlFor="NewBoxForm-height">Height</label>
      <input 
        id="NewBoxForm-height" 
        name="height" 
        type="text" 
        value={form.height}
        onChange={handleChange}
      />

      <label htmlFor="NewBoxForm-backgroundColor">Background Color</label>
      <input 
        id="NewBoxForm-backgroundColor" 
        name="backgroundColor" 
        type="text" 
        value={form.backgroundColor}
        onChange={handleChange}
      />

      <button>Submit</button>
    </form>
  )
}

export default NewBoxForm;
