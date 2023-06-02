import React, { useContext, useState } from "react";
import thumb1 from "../assets/thumb.png";
import "./Video.css";
// import VideoDispatchContext from "../context/VideoDispatchContext";

const Video = ({ title, id, channel=AcadWin, view, time, verified, children, deleteVideos, editVideos }) => {

  // console.log("3");

  // const dispatch = useContext(VideoDispatchContext);
  const dispatch = useVideoDispatch();  //we call our custom hooks

  return (
    <div className="container">
      <button className="cross"  onClick={() =>dispatch({type:'DELETE', payload:id})}>X</button>
      <button className="edit"  onClick={() =>editVideos(id)}>Edit</button>
      <div className="pic">
        <img src={thumb1} alt="image" />
      </div>

      <div className="title">{title}</div>

      <div className="channel">
        {channel} {verified ? "✅" : null}{" "}
      </div>

      {/* OR <div className="channel">{channel} {verified && '✅'} </div> */}

      {/* OR {verified ? (
        <div className="channel">{channel} ✅</div>
      ) : (
        <div className="channel">{channel}</div>
      )} */}

      <div className="view">
        {view} view <span>.</span> {time}
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Video;
