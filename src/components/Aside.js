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
          <li><Link to="/state"> State (class, function- useState) </Link></li>
          <li><Link to="/lifecycle"> Lifecycle </Link></li>
          <li><Link to="/events"> Events </Link></li>
          <li><Link to="/key"> Key </Link></li>
          <li><Link to="/refs">Refs</Link></li>
          <li><Link to="/async">Отправка асинхронных запросов</Link></li>
          <li><Link to="/vdom">Virtual DOM</Link></li>
          <li><Link to="/fragment">React.Fragment</Link></li>
          <li><Link to="/memo">React.memo</Link></li>
          <li><Link to="/useeffect">useEffect</Link></li>
          <li><Link to="/router">Router</Link></li>
          <li><Link to="/context">Context</Link></li>
          <li><Link to="/form">Работа с формой</Link></li>
         </ul>
        </aside>
    )
}

export default Aside;