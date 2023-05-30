import React, { useEffect, useState } from 'react'

const AddVideos = ({okVideos, updateVideos,dispatch, editableVideos}) => {

    const initialState = {
        time:"2 Months",
        verified:true,
        channel:"AcadWin",
        view:'',
        title:''
    };

    const [video, setVideo] = useState(initialState);

    function submitHandle(e){
        e.preventDefault();
        if(editableVideos){
            // updateVideos(video);
            dispatch({type:'ADD', payload:video})
        } else{
            // okVideos(video);
            dispatch({type:'ADD', payload:video})
        }
        setVideo(initialState);
    };

    function changeHandle(event){
        setVideo({...video,
        [event.target.name] : event.target.value})
    };

    useEffect( () =>{
        if(editableVideos){
            setVideo(editableVideos);
        }
    }, [editableVideos]);

  return (
    <div>
        <form action="#">
            <input className='margin' value={video.title} name='title' type="text" onChange={changeHandle} placeholder='title' />
            <input className='margin' value={video.view} name='view' type="text" onChange={changeHandle} placeholder='view' />
            <button className='btn margin' onClick={submitHandle}>
                {editableVideos? 'Edit' : 'Add'}
            </button>
        </form>
    </div>
  )
}

export default AddVideos