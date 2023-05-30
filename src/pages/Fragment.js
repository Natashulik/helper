import React from "react";
import { Link } from "react-router-dom";


function Fragment() {
    return(
        <>
        <h2 className="content_title">React.Fragment</h2>
        <div className="content_text">
            <p>Компоненты в React  часто возвращают несколько элементов. Фрагменты позволяют делать это, не 
               создавая лишних узлов. Создание дополнительного узла, например  div в table, приведет к тому, что HTML
               окажется невалидным. Фрагменты решают эту проблему.</p>
        </div>
        <div className="content_code">
      <pre> 
        <code> 
        {`
    return (
        <React.Fragment>
          <Child1 />
          <Child2 />
        </React.Fragment>
      );`}           
        </code>
      </pre>
    </div>
    <div className="content_text"> 
    <p>Eсли мы фрагмент импортируем: </p>
     </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
    import { Fragment } from 'react';`}           
        </code>
      </pre>
    </div>
    <div className="content_text">
        <p>то вместо React.Fragment можно указывать Fragment.</p>
        <p>Единственный атрибут, допустимый у Fragment, - это  key (ключ).</p>
        <p>Существует сокращенная запись (импортировать не нужно). Она выглядит как пустые теги:</p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
    return (
        <>
          <Child1 />
          <Child2 />
        </>
      );`}           
        </code>
      </pre>
    </div>
    <div className="content_text">
        <p> Однако сокращенная запись не поддерживает ключи или атрибуты.</p>
    </div>
    <div className="box_arrow">
                <Link className="arrow_prev" to="/vdom"> ⟵ </Link>
                <Link className="arrow_next" to="/memo"> ⟶ </Link>
      </div>
        </>
    )

}
export default Fragment;