import React from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";

const App = () => {
  return (
    <>
      <div className="h-screen bg-black">
        <div className="h-[90%] flex">
          <Sidebar></Sidebar>
          <Display></Display>
        </div>
        <Player></Player>
      </div>
    </>
  );
};

export default App;
