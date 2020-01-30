import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import { listObjects } from "../utils/index";
import { getSingleObject } from "../utils/index";

export default function App() {
  const [currentView, setCurrentView] = useState("AllPhotos");
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState();

  useEffect(async () => {
    // if (!localStorage.getItem("photo")) {
    console.log("loading");
    const photoObjects = await listObjects();
    const photos = await Promise.all(
      photoObjects.map(photoObject => {
        return getSingleObject(photoObject.Key);
      })
    );
    // localStorage.setItem("photo", photos);
    // }
    // setPhotos(localStorage.getItem("photo"));
    setPhotos(photos);
    // console.log("photos: ", photos);
    // console.log("localStrage: ", localStorage);
  }, []);

  const goHome = () => {
    setCurrentView("AllPhotos");
  };

  const selectPhoto = (imgIndex, imageSrc) => {
    setSelectedPhoto(imageSrc);
    setCurrentView("SinglePhoto");
  };

  const displayPhoto = () => {
    if (currentView === "AllPhotos") {
      return <AllPhotos photos={photos} selectPhoto={selectPhoto} />;
    } else {
      return <SinglePhoto img={selectedPhoto} />;
    }
  };
  return (
    <div className="app">
      <Navbar receiveFiles={goHome} />
      {displayPhoto()}
    </div>
  );
}
