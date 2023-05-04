import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Aboutpage from "../pages/Aboutpage";
import Createpage from "../pages/Createpage";

function Content() {
    return(
        <div className="content">
         <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/about" element={<Aboutpage/>} />
            <Route path="/create" element={<Createpage/>} />
        </Routes>
        </div>
    )
}

export default Content;