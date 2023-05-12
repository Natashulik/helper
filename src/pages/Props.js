import React from "react";
import Students from "./Students";
import { Link } from "react-router-dom";

const info = [
    {name: 'Liza', surname: 'Ivanova', age: 19},
    {name: 'Anna', surname: 'Lavrova', age: 22},
    {name: 'Pavel', surname: 'Konovalov', age: 21},
]

function Props() {
    return(
        <>
        <h2 className="content_title">Props (class, function)</h2>
        <div className="content_text">
            <p> Props (пропсы) - это входные данные реакт-компонентов, передаваемые от родительского копонента
                дочернему.
            </p>
            <p>
                Пропсы предназначены только для чтения. Изменять их нельзя.
            </p>
            <p>
                1.  Пропсы в функциональных компонентах:
            </p>
        </div>
        <div className="content_code">
            <pre>
              <code>
            {`
    function Hello(props) {
        return <h1>Привет, {props.name}</h1>;
    }`}
              </code>
            </pre>
      </div>
      <div className="content_text">
        <p>
        2.  Пропсы в классовых компонентах (принимаются по умолчанию): 
        </p>
      </div>
      <div className="content_code">
            <pre>
              <code>
            {`
    class Hello extends React.Component {
        render() {
            return <h1>Привет, {this.props.name}</h1>;
        }
    }`}
              </code>
            </pre>
      </div>
      <div className="content_text">
        <p>
          В пропсах могут передаваться данные различного типа (числа, строки, функции, объекты).
          Например, в родительском компоненте App у нас есть массив с информацией о студентах. Данный массив мы передаем в 
          дочерний компонент Students:
        </p>
      </div>
      <div className="content_code">
         <pre>
           <code>
            {`
    const info = [
        {name: 'Liza', surname: 'Ivanova', age: 19},
        {name: 'Anna', surname: 'Lavrova', age: 22},
        {name: 'Pavel', surname: 'Konovalov', age: 21},
    ]
    function App() {
        return <Students info={info} />
    }`}
           </code>
         </pre>
      </div>
      <div className="content_text">
        <p>
          В дочернем компоненте на основании полученных пропсов формируется список студентов:
        </p>
      </div>
      <div className="content_code">
        <pre>
          <code>
      {`
    function Students(props) {
        return <ul> 
            {props.info.map(function(item) {
                return <li key={item.name}>{item.name} {item.surname}, {item.age}</li>
            })}
         </ul>;
    }`}
          </code>
       </pre>
      </div>
      <div className="content_text">
        <p> В результате  на странице мы увидим: </p>
        <Students info={info}/>
      </div>
      <div className="box_arrow">
                <Link className="arrow_prev" to="/component"> ⟵ </Link>
                <Link className="arrow_next" to="/state"> ⟶ </Link>
      </div>
    </>
        
    )
}

export default Props;
