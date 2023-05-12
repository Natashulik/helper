import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
    return(
        <div className="content">
            <div className="scheme_title"> Программа изучения React/Redux: </div>
            <div className="scheme_image"> </div>
             <div className="box_arrow">
             <Link to="/about" className="arrow_next"> ⟶ </Link>
             </div>
        </div>
    )
}

export default Home;

