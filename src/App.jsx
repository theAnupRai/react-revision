import "./App.css";
import videosData from "./data/data";
import Counter from "./components/Counter";
import { useState } from "react";
import AddVideos from "./components/AddVideos";
import VideosList from "./components/VideosList";

// function App() {
//   const obj = {
//     title: "Vlogging Day 1",
//     time: "3 Months",
//     view: "2M",
//     verified: "true",
//   };

//   return (
//     <div className="App">
//       <h1>AcadWin Video</h1>
//       <Video {...obj} />
//       <Video
//         title="Vlogging Day 2"
//         time="2 Months"
//         view="5M"
//         verified={false}
//         channel="AcadWin Second"
//       />
//     </div>
//   );
// }

// export default App;

// OR

function App() {

  const [videos, setVideos] = useState(videosData);

  function okVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  return (
    <div className="App">
      <h1>AcadWin Videos</h1>

      <VideosList videos={videos} ></VideosList>

      <Counter></Counter>

      <div>
        {/* Note : (new topic) how to upload new video through button */}
        <button
          className="btn margin"
          onClick={() => {
            setVideos([
              ...videos,
              {
                title: "Vlogging Day X : Random",
                time: "2 Months",
                view: "5M",
                verified: false,
                id: videos.length + 1,
                channel: "AcadWin Second",
              },
            ]);
          }}
        >
          Add Videos
        </button>
      </div>

      <AddVideos okVideos={okVideos}></AddVideos>
    </div>
  );
}

export default App;
