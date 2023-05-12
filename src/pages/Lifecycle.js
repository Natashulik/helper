import React from "react";
import { Link } from "react-router-dom";

function Lifecycle(){
    return(
        <>
        <h2 className="content_title">Lifecycle</h2>
        <div className="content_text">
            <p>Жизненный цикл компонента (Component Lifecycle) можно разделить на 4 стадии:</p>
            <ul>
                <li> initialization - инициализация </li>
                <li> mounting - монтирование </li>
                <li> updating - обновление </li>
                <li> unmounting - размонтирование</li>
            </ul>
            <p> На разных этапах используются различные методы.</p>
        </div>
        </>
    )
}


export default Lifecycle;