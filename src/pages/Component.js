import React from "react";
import { Link } from "react-router-dom";

function Component() {
    return(
        <>
        <h2 className="content_title">  Components (class, function) </h2>
        <div className="content_text"> 
          <p>Компоненты - это независимые блоки кода, которые можно многократно использовать в приложении.
           Во многом компоненты ведут себя как обычные функции JavaScript. Они принимают входные данные («пропсы») и возвращают
           React-элементы, которые затем появляются на веб-странице.
          </p>
          <p>Существует 2 способа создания компонентов:</p>
          <p> 1.  функциональный</p>
        </div>
        <div className="content_code">
            <pre>
              <code>
            {`
    function Hello() {
        return <h1>Привет</h1>;
      }`}
              </code>
            </pre>
      </div>
      <div className="content_text"> 
        <p>2.  с помощью классов (классовые компоненты) </p></div>
        <div className="content_code">
            <pre>
              <code>
            {`
    class Hello extends React.Component {
        render() {
          return <h1>Привет</h1>;
        }
      }`}
              </code>
            </pre>
      </div>
      <div className="content_text">
        <p> Имена компонентов React всегда должны начинаться с заглавной буквы.</p>
        <p> Компоненты могут ссылаться на другие компоненты. Например: </p>
     </div>
     <div className="content_code">
            <pre>
              <code>
            {`
    function App() {
        return (
        <div>
            <Aside />
            <Content />
        </div>
        );
    }       `}
              </code>
            </pre>
      </div>
      <div className="box_arrow">
                <Link className="arrow_prev" to="/create"> ⟵ </Link>
                <Link className="arrow_next" to="/props"> ⟶ </Link>
      </div>
        </>
        
    )
}

export default Component;
