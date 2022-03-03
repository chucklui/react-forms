function NewBoxForm({ handleSubmit, handleChange }) {

  return (
    <form>
      <label htmlFor="NewBoxForm-width"></label>
      <input id="NewBoxForm-width" name="width" type="text" />

      <label htmlFor="NewBoxForm-height"></label>
      <input id="NewBoxForm-height" name="height" type="text" />

      <label htmlFor="NewBoxForm-backgroundColor"></label>
      <input id="NewBoxForm-backgroundColor" name="backgroundColor" type="text" />

      <button>Submit</button>
    </form>
  )


}