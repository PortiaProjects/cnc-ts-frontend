import { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

function App() {

  const [tracks, setTracks] = useState([] as any []);
  const apiURL = "http://localhost:3001/tracks"
  
  function fetchTracks() {
    fetch(apiURL)
    .then(resp => resp.json())
    .then(data => {
      setTracks(data);
    console.log(data)
    })
  }
  return (
    <div className="App">
      <h1>ClicknClear Tracklist</h1>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchTracks}>Get Tracks</button>
        <br />
      </div>

      {/* Display data from API */}

      {/* Use JSX below for each book */}
      {tracks &&
          tracks.map((track, index) => {
            return (
              <div className="track" key={index}>
                <h3>Track {index + 1}</h3>
                <h2>{track.title}</h2>
                <h2>{track.artist}</h2>
              </div>
            );
          })}
      </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);



//SAME CODE AS JS THAT DOESN'T WORK WITH TS
// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [list, setList] = useState(true);
//   const [card, setCard] = useState(false);
//   const [tracks, setTracks] = useState([]);
//   const [track, setTrack] = useState({});

//   useEffect(() => {
//     fetch("http://localhost:3001/tracks/")
//       .then((response) => response.json())
//       .then((responseJson) => {
//         setTracks(responseJson.data);
//       });
//   }, []);

//   let showCard = (id: any) => {
//     fetch(`http://localhost:3001/tracks/${id}`)
//       .then((response) => response.json())
//       .then((responseJson) => {
//         setTrack(responseJson.data);
//         setList(false);
//         setCard(true);
//       });
//   };

//   let showList = () => {
//     setCard(false);
//     setList(true);
//   };

//   return (
//     <div className="App">
//       <h1>ClicknClear Tracklist</h1>
//       <div className="container">
//         {list ? (
//           <div className="list-group">
//             {tracks.map((track) => (
//               <li
//                 onClick={() => showCard(track.id)}
//                 className="list-group-item list-group-item-action"
//               >
//                 Track {track.id}
//               </li>
//             ))}
//           </div>
//         ) : null}
//         {card ? (
//           <div className="card" style={{ width: "18rem" }}>
//             <div className="card-body">
//               <p className="card-text">Track {track.id}</p>
//               <h5 className="card-title">{track.title}</h5>
//               <p className="card-text">{track.artist}</p>
//               <div onClick={() => showList()} className="btn btn-primary">
//                 Back
//               </div>
//             </div>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// }
