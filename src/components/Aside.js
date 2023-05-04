import React from "react";
import { Routes, Route, Link } from "react-router-dom";
function Aside() {
    return(
        <aside className="sidebar">
          <h5 className="sidebar_title">Оглавление </h5>
         <ul className="nav">
          <li><Link to="/about">Что такое реакт? </Link></li>
          <li><Link to="/create">Как создать первое react приложение?</Link></li>
          <li><Link to=""> Components (class, function)</Link></li>
          <li><a href="">Props (class, function)</a></li>
          <li><a href="">State(class, function- useState)</a></li>
          <li><a href="">Lifecycle</a></li>
          <li><a href="">Events</a></li>
          <li><a href="">Key</a></li>
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