import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Create from "../pages/Create";
import Component from "../pages/Component";
import Props from "../pages/Props";
import State from "../pages/State";
import Lifecycle from "../pages/Lifecycle";
import Events from "../pages/Events";
import Key from "../pages/Key";
import Refs from "../pages/Refs";
import AsyncRequest from "../pages/AsyncRequest";
import Vdom from "../pages/Vdom";
import Fragment from "../pages/Fragment";
import Memo from "../pages/Memo";
import UseEffect from "../pages/UseEffect";
import Router from "../pages/Router";
import Context from "../pages/Context";
import Form from "../pages/Form";

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
            <Route path="/events" element={<Events/>} />
            <Route path="/key" element={<Key/>} />
            <Route path="/refs" element={<Refs/>} />
            <Route path="/async" element={<AsyncRequest/>} />
            <Route path="/vdom" element={<Vdom/>} />
            <Route path="/fragment" element={<Fragment/>} />
            <Route path="/memo" element={<Memo/>} />
            <Route path="/useeffect" element={<UseEffect/>} />
            <Route path="/router" element={<Router/>} />
            <Route path="/context" element={<Context/>} />
            <Route path="/form" element={<Form/>} />
        </Routes>
        </div>
    )
}

export default Content;