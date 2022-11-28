import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import data from "../livescoreData";
import { Scoreboard } from "../components/Scoreboard";

function Home() {
  const [scoreData, setScoreData] = React.useState(data);

  return (
    <div className="bg-gray-800 text-white h-[100vh]">
      <Navbar />
      <div className="mx-11">
        {
          data.map((score, index) => {
            return (
              <Scoreboard key={index} value={score}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default Home;
