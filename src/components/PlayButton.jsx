import React, {useState} from 'react'

const playButton = ({children, onPlay, onPause}) => {

  // console.log("2");

  const [play, setPlay] = useState(false);

  function clickHandle() {
    if(play) onPause();
        else onPlay();
      setPlay(!play);
  }
        
  return (
    <div>
        <button className='btn' onClick={clickHandle} >{children} : {play ? '⏯️' : '⏸️'} </button>
    </div>
  )
}

export default playButton