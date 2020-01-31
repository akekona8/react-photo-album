import React from "react";
import "../styles/navbar.css";
import _ from "lodash";
import Upload from "./Upload";
import { useDispatch } from "react-redux";
import { goHome } from "../redux/redux";

export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <h1 onClick={() => dispatch(goHome())} className="navText">
        HOME
      </h1>
      <Upload />
    </div>
  );
}
