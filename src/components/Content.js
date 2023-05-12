import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Create from "../pages/Create";
import Component from "../pages/Component";
import Props from "../pages/Props";
import State from "../pages/State";
import Lifecycle from "../pages/Lifecycle";


function Content() {
    return(
        <div className="content">
         <Routes>
            <Route path="/react-gh-pages" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/component" element={<Component/>} />
            <Route path="/props" element={<Props/>} />
            <Route path="/state" element={<State/>} />
            <Route path="/lifecycle" element={<Lifecycle/>} />
        </Routes>
        </div>
    )
}

export default Content;