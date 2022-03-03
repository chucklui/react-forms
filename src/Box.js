/** NewBoxForm: Used for creating new boxes
 * 
 *  Props:
 * - width: number
 * - height: number
 * - backgroundColor: string of a css color
 * - removeBox: function for removing the box
 * 
 * BoxList -> Box
*/

function Box({ width, height, backgroundColor, removeBox }) {
  return (
    <div className="Box">
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: `${backgroundColor}`
        }}>
      </div>
      <button onClick={removeBox}>X</button>
    </div >
  )
}

export default Box;
