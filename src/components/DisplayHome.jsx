import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";
import TempAlbumItem from "./TempAlbumItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="my-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <TempAlbumItem
              key={index}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item.id}
            ></TempAlbumItem>
          ))}  
        </div>
      </div>
      <div className="my-4">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item.id}
            ></SongItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
