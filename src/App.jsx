import "./App.css";
import videosData from "./data/data";
import Counter from "./components/Counter";
import { useContext, useReducer, useState } from "react";
import AddVideos from "./components/AddVideos";
import VideosList from "./components/VideosList";
import ThemeContext from "./context/ThemeContext";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";

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
  const [editableVideos, setEditableVideos] = useState(null);

  const [mode, setMode] = useState("darkMode");

  // Reducer Start
  const videoReducer = (videos, action) => {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.lemgth + 1 }];

      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);

      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideos(null); // because empty input box : Not recomended
        return newVideos;

      default:
        return videos;
    }
  };
  const [videos, dispatch] = useReducer(videoReducer, videosData);

  // useContext start

  // const themeContext = useContext(ThemeContext);

  // const [videos, setVideos] = useState(videosData);

  // function okVideos(video) {
  //   dispatch({type:'ADD', payload:video})
  //   // setVideos([...videos, { ...video, id: videos.length + 1 }]);
  // };

  // function deleteVideos(id) {
  //   dispatch({type:'DELETE', payload:id})
  //   // setVideos(videos.filter((video)=>video.id!==id));
  // };

  function editVideos(id) {
    // dispatch({type:'EDIT', payload:id})
    setEditableVideos(videos.find((video) => video.id === id));
  }

  // function updateVideos(video) {
  //   // dispatch({type:'UPDATE', payload:video})
  //   // const index = videos.findIndex((v)=>v.id===video.id);
  //   // const newVideos = [...videos];
  //   // newVideos.splice(index, 1, video);
  //   // setVideos(newVideos);
  // }

  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className={`App ${mode}`}>
            <h1>AcadWin Videos</h1>

            <button
              className="btn"
              onClick={() =>
                setMode(mode === "darkMode" ? "lightMode" : "darkMode")
              }
            >
              Mode Switch
            </button>

            <VideosList
              editVideos={editVideos}
              // dispatch={dispatch}
              // videos={videos}
            ></VideosList>

            <Counter></Counter>

            <div>
              {/* Note : (new topic) how to upload new video through button */}
              {/* <button
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
          </button> */}
            </div>

            <AddVideos
              editableVideos={editableVideos}
              // dispatch={dispatch}
            ></AddVideos>
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
