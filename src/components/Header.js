import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo5.png";

function Header() {
    return(
        <header>
            <div className="logo">
            <Link to="/helper">
                <img className="logo_image" src={logo} alt="логотип"/>
            </Link>
               </div>
            <h1 className="title"><Link to="/helper"> Конспект по основам React</Link> </h1>
        </header>
    )
}

export default Header;