import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function About() {
    return(
      <>
      <h2 className="content_title">  Что такое React? </h2>
      <div className="content_text"> 
          <p> React — это библиотека JavaScript с открытым исходным кодом, 
          созданная Facebook для разработки сложных интерактивных пользовательских интерфейсов в веб- и 
          мобильных приложениях. Основная идея React — создание компонентов пользовательского интерфейса.</p> 
          <p>Исходный код React открыт в мае 2013 года. Текущей версий (май 2023 года) является версия React v18.0.</p>
      </div>
      <h2 className="content_title">  Для чего нужен React? </h2>
      <div className="content_text">
      <p>React используют для создания одностраничных и многостраничных приложений, разработки крупных сайтов.</p>
      <p>Одностраничное приложение - SPA (Single Page Application) - это приложение, содержащее всего одну HTML-страницу,
         контент которой динамически  обновляется с помощью JavaScript.</p>
         </div>
       <h2 className="content_title"> Особенности React</h2>
       <div className="content_text">
        <ul>
          <li> использование компонентов. Мы можем один раз создать отдельные компоненты, а затем использовать их где угодно.</li>
          <li> декларативность. Разработчик  сразу описывает, как компоненты интерфейса выглядят в разных состояниях, т.е. сразу 
            описывается конечное состояние интерфейса.</li>
          <li> использование JSX. Это расширение языка JavaScript, ситаксис которого похож на HTML.</li>
          <li> использование виртуального DOM. Это легковесная копия обычного DOM, которую проще обновлять.</li>
          <li> нисходящий поток данных. Компоненты могут передавать свойства и данные друг другу, но только в одном направлении
                — от «родительских» к дочерним. </li>
        </ul>
       </div>
       <div className="box_arrow">
       <Link to="/" className="arrow_prev"> ⟵ </Link>
       <Link to="/create" className="arrow_next"> ⟶ </Link>
         </div>
      </>
    )
}

export default About;