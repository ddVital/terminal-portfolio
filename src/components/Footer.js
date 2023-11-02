import React, { useState } from "react";
import LazyShow from "../components/LazyShow.js";
import dino from "../img/dino.png";
import todo from "../img/todo.png";
import { heartIcon } from "./Icons.js";

const Footer = ({ t, i18n }) => {
  
  return (
    <footer className="footer">
      <a href="">Designed & built with {heartIcon()} by David vital.</a>
    </footer>
  );
};

export default Footer;