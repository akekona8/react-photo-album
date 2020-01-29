import React from "react";
import _ from "lodash";

export default function SinglePhoto(props) {
  return (
    <div>
      <img src={props.img} className="single-photo"></img>
    </div>
  );
}
