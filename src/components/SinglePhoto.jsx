import React from "react";
import _ from "lodash";
import { useSelector } from "react-redux";

export default function SinglePhoto() {
  const selectedPhoto = useSelector(state => state.selectedPhoto);
  const randomDegree = {
    transform: `rotate(${Math.floor(Math.random() * 45) - 22}deg)`
  };
  return (
    <div>
      <img
        src={selectedPhoto}
        style={randomDegree}
        className="single-photo"
      ></img>
    </div>
  );
}
