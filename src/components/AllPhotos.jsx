import React from "react";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { selectPhoto } from "../redux/redux";

export default function AllPhotos() {
  const photos = useSelector(state => state.photos);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="gallery">
        {photos.map((photo, imgIndex) => {
          const imgSrc = `data:image/png;base64, ${photo}`;
          const randamDegree = {
            transform: `rotate(${Math.floor(Math.random() * 45) - 22}deg)`
          };
          return (
            <img
              src={imgSrc}
              className="image"
              style={randamDegree}
              onClick={() => dispatch(selectPhoto(imgIndex, imgSrc))}
            ></img>
          );
        })}
      </div>
    </div>
  );
}
