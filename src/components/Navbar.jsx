import React from "react";
import "../styles/navbar.css";
import _ from "lodash";
import Upload from "./Upload";
import { saveObject } from "../utils/index";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <h1 onClick={() => props.receiveFiles()} className="navText">
        HOME
      </h1>
      <Upload onSaveObject={saveObject} />
    </div>
  );
}
