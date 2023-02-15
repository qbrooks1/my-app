import React from "react";
import "./Dropdown.css";

const Dropdown = ({ placeHolder }) => {

  return (
    <div className="dropdown-container">
      <label className="label">Occupation or State
        <select className="input"></select>
      </label>
    </div>
  );
};

export default Dropdown;