import Video from "./components/Video";
import "./App.css";
import videos from "./data/data";
import PlayButton from "./components/playButton";
import Counter from "./components/Counter";

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

    return (
      <div className="App">
        <h1>AcadWin Videos</h1>
        <div className="cover">
          {videos.map((video) => (
            <Video
              key={video.id}
              id={video.id}
              title={video.title}
              view={video.view}
              time={video.time}
              channel={video.channel}
              verified={video.verified}
            >
              <div className="app-btn">
                <PlayButton
                  onPlay={() => console.log("playing:", video.title)} onPause={() => console.log("Pause:", video.title)}
                >
                  {video.title}
                </PlayButton>
              </div>
            </Video>
          ))}
        </div>

        <Counter></Counter>

      </div>
    );
}

export default App
