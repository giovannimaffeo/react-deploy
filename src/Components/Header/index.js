import React from "react";

import { IoIosArrowDown } from "react-icons/io";

import "./styles.css";
export default function Header() {
  return (
    <div className="HeaderContainer">
      <button type="button">
        <h1>Aplicativos</h1>
        <div className="IconContainer">
          <IoIosArrowDown size={27} color="#fff" />
        </div>
      </button>
    </div>
  );
}
