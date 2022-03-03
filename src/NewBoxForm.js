import { useState } from 'react';

/** NewBoxForm: Used for creating new boxes
 * 
 *  Props:
 * - createBox: function for creating the new box
 * 
 * State:
 * - form: { width: '', height: '', backgroundColor: '' }
 * 
 * BoxList -> NewBoxForm
*/

function NewBoxForm({ createBox }) {
  const initialForm = { width: '', height: '', backgroundColor: '' };
  const [form, setForm] = useState(initialForm);


  /** handleChange
   * 
   * Updates the state of the form when user types in input field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setForm(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** handleSubmit
   * 
   * Triggered on form submission.
   * Creates a new box from the form data and resets form  */
  function handleSubmit(evt) {
    evt.preventDefault();
    createBox(form);
    setForm(initialForm);
  }

  return (
    <form className="NewBoxForm" onSubmit={handleSubmit}>
      <label htmlFor="NewBoxForm-width">Width</label>
      <input
        id="NewBoxForm-width"
        name="width"
        type="text"
        value={form.width}
        onChange={handleChange}
      /> <br />

      <label htmlFor="NewBoxForm-height">Height</label>
      <input
        id="NewBoxForm-height"
        name="height"
        type="text"
        value={form.height}
        onChange={handleChange}
      /> <br />

      <label htmlFor="NewBoxForm-backgroundColor">Background Color</label>
      <input
        id="NewBoxForm-backgroundColor"
        name="backgroundColor"
        type="text"
        value={form.backgroundColor}
        onChange={handleChange}
      /> <br />

      <button>Submit</button>
    </form>
  )
}

export default NewBoxForm;
