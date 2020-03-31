import React, { useEffect } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import { listObjects, getSingleObject } from "../utils/index";
import { useSelector, useDispatch } from "react-redux";
import { storePhoto } from "../redux/redux";

export default function App() {
  const currentView = useSelector(state => state.currentView);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const photoObjects = await listObjects();
      const photos = await Promise.all(
        photoObjects.map(photoObject => {
          return getSingleObject(photoObject.Key);
        })
      );
      dispatch(storePhoto(photos));
    }
    fetchData();
  }, []);

  const displayPhoto = () => {
    if (currentView === "AllPhotos") {
      return <AllPhotos />;
    } else {
      return <SinglePhoto />;
    }
  };
  return (
    <div className="app">
      <Navbar />
      {displayPhoto()}
    </div>
  );
}
