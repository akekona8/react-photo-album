import React from "react";
import _ from "lodash";

export default function SinglePhoto(props) {
  const randamDegree = {
    transform: `rotate(${Math.floor(Math.random() * 45) - 22}deg)`
  };
  return (
    <div>
      <img src={props.img} style={randamDegree} className="single-photo"></img>
    </div>
  );
}
