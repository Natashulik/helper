import React from "react";
import smile from "./smile2.png"

function Footer() {
    return(
       <footer className="footer"> 
       <div className="footer_sign">
         <p>  Реакт - это реально</p>
         <img className="footer_smile" src={smile} alt="смайл"/>
        </div>
         <div>Все права защищены   &copy; </div>
       </footer>
    )
}

export default Footer;