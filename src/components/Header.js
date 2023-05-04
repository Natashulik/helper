import React from "react";

function Header() {
    return(
        <header>
            <div className="logo">
                <a href="/">
                <img class="logo_image" src="./logo5.png" alt="логотип"/>
                </a>
           </div>
            <h1 className="title"><a href="index.html"> Конспект по основам React</a> </h1>
        </header>
    )
}

export default Header;