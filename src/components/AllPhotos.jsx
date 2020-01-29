import React, { useEffect } from "react";
import _ from "lodash";

export default function AllPhotos(props) {
  const photos = props.photos;

  return (
    <div>
      {photos.map((photo, index) => {
        const imageSrc = `data:image/png;base64, ${photo}`;
        return (
          <img
            src={imageSrc}
            className="image"
            onClick={() => props.onClickImag(index, imageSrc)}
          ></img>
        );
      })}
    </div>
  );
}
