import React, {useContext, useState} from 'react'
import ThemeContext from '../context/ThemeContext';

const playButton = ({children, onPlay, onPause}) => {

  // console.log("2");

  const themeContext = useContext(ThemeContext);

  const [play, setPlay] = useState(false);

  function clickHandle() {
    if(play) onPause();
        else onPlay();
      setPlay(!play);
  }
        
  return (
    <div>
        <button className={`btn ${themeContext}`} onClick={clickHandle} >{children} : {play ? '⏯️' : '⏸️'} </button>
    </div>
  )
}

export default playButton