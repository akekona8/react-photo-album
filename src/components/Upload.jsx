import React, { useRef } from "react";
import _ from "lodash";
import "../styles/upload.css";
import { saveObject } from "../utils/index";

export default function Upload() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.click();
  };
  const onChange = e => {
    saveObject(inputEl.current.files[0]);
  };
  return (
    <div className="file-upload">
      <input
        id="file"
        name="file"
        type="file"
        ref={inputEl}
        accept="image/png, image/jpeg"
        onChange={e => onChange(e)}
      />
      <button onClick={onButtonClick} className="button">
        UPLOAD
      </button>
    </div>
  );
}
