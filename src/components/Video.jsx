import React, { useState } from "react";
import thumb1 from "../assets/thumb.png";
import "./Video.css";

const Video = ({ title, channel=AcadWin, view, time, verified, children }) => {

  // console.log("3");

  return (
    <div className="container">
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
