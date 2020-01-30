import React, { useEffect } from "react";
import _ from "lodash";

export default function AllPhotos(props) {
  const photos = props.photos;

  return (
    <div>
      <div className="gallery">
        {photos.map((photo, index) => {
          const imageSrc = `data:image/png;base64, ${photo}`;
          const randamDegree = {
            transform: `rotate(${Math.floor(Math.random() * 45) - 22}deg)`
          };
          return (
            <img
              src={imageSrc}
              className="image"
              style={randamDegree}
              onClick={() => props.selectPhoto(index, imageSrc)}
            ></img>
          );
        })}
      </div>
    </div>
  );
}
