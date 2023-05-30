import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo5.png";

function Header() {
    return(
        <header>
            <div className="logo">
            <Link to="/">
                <img className="logo_image" src={logo} alt="логотип"/>
            </Link>
               </div>
            <h1 className="title"><a href="index.html"> Конспект по основам React</a> </h1>
        </header>
    )
}

export default Header;