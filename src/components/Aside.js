import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Aside() {
    return(
        <aside className="sidebar">
          <h5 className="sidebar_title">Оглавление </h5>
         <ul className="nav">
          <li><Link to="/about"> Что такое реакт? </Link></li>
          <li><Link to="/create"> Как создать первое react приложение? </Link></li>
          <li><Link to="/component"> Components (class, function) </Link></li>
          <li><Link to="/props"> Props (class, function) </Link></li>
          <li><Link to="/state"> State(class, function- useState) </Link></li>
          <li><Link to="/lifecycle"> Lifecycle </Link></li>
          <li><Link to="/events"> Events </Link></li>
          <li><Link to="/key"> Key </Link></li>
          <li><a href="">Refs</a></li>
          <li><a href="">Отправка асинхронных запросов</a></li>
          <li><a href="">Virtual DOM</a></li>
          <li><a href="">React.Fragment</a></li>
          <li><a href="">React.memo</a></li>
          <li><a href="">useEffect</a></li>
          <li><a href="">Router</a></li>
          <li><a href="">Context</a></li>
          <li><a href="">Работа с формой</a></li>
         </ul>
        </aside>
    )
}

export default Aside;