

function Box ({width, height, backgroundColor}){

  return(
    <div 
      className="Box" 
      style={{width:`${width}px`, height:`${height}px`, backgroundColor:`${backgroundColor}`}}>
    </div>
  )
}

export default Box;
