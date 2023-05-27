import React, { useState } from 'react'

const AddVideos = ({okVideos}) => {

    const initialState = {
        time:"2 Months",
        verified:true,
        channel:"AcadWin",
        views:'',
        title:''
    };

    const [video, setVideo] = useState(initialState);

    function submitHandle(e){
        e.preventDefault();
        okVideos(video);
        setVideo(initialState);
    };

    function changeHandle(event){
        setVideo({...video,
        [event.target.name] : event.target.value})
    };

  return (
    <div>
        <form action="#">
            <input className='margin' value={video.title} name='title' type="text" onChange={changeHandle} placeholder='title' />
            <input className='margin' value={video.views} name='views' type="text" onChange={changeHandle} placeholder='views' />
            <button className='btn margin' onClick={submitHandle}>
                Add
            </button>
        </form>
    </div>
  )
}

export default AddVideos