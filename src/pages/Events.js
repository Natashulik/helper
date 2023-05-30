import React from "react";
import { Link } from "react-router-dom";
import Hello from "./Hello";

function Events() {
    return (
        <>
         <h2 className="content_title">Events</h2>
         <div className="content_text"> 
            <p> Обработка событий в React похожа на обработку событий DOM-элементов с помощью обычного JavaScript. 
                Но есть отличия:</p>
                <ul>
                    <li> cобытия в React используют camelCase (вместо "onclick" - "onClick")</li>
                    <li> в JSX мы передаем функцию как обработчик события вместо строки. </li>
               </ul>
            <p> Существует множество различных событий: события мыши (onClick, onDoubleClick, onContextMenu, onMouseDown, onMouseUp), 
                события клавиатуры (onKeyDown, onKeyPress, onKeyUp), события формы (onChange, onInput, onSubmit), события изображений (onLoad,
                onError) и другие.
            </p>
            <p><b>События в функциональных компонентах</b></p>
         </div>
         <div className="content_code">
            <pre>
              <code>
            {`
    function Hello() {
        function press(){
            alert("Привет");
        }
        return <button onClick={press}>button</button>;
      }`}
              </code>
            </pre>
      </div>
      <div className="content_text">
        <p> Здесь атрибуту onClick в качестве обработчика передается функция press.
            При нажатии на кнопку данная функция будет вызываться. На экране мы получим следующее:</p> 
      </div>
      <Hello/>
      <div className="content_text">
        <p> Если в обработчик события необходимо передать некоторые параметры,  то можно вызвать обработчик
            через стрелочную функцию:
        </p> 
      </div>
      <div className="content_code">
            <pre>
              <code>
            {`
    function Hello() {
        function press(name) {
            alert('Привет, ' + name);
        }
        <button onClick={() => press('Лиза')}>button</button>
      }`}
              </code>
            </pre>
      </div>
      <div className="content_text"> 
         <p><b>События в компонентах-классах</b></p>
         <p> Существуют  разные способы  определения и вызова события:</p>
         <p>  1. Событие можно привязать в конструкторе компонента:</p> 
     </div>
         <div className="content_code">
            <pre>
              <code>
            {`
    class Hello extends React.Component {
        constructor(props) {
            super(props);
            this.press = this.press.bind(this);
        }
        press(){
            alert("Привет");
        }
        render() {
            return <button onClick={this.press}>button</button>;
        }
    }`}
              </code>
            </pre>
      </div>
      <div className="content_text"> 
            <p> 2. Обработчик можно определить в виде публичного поля компонента, которое указывает на стрелочную функцию.</p>
      </div>
      <div className="content_code">
            <pre>
              <code>
            {`
    class Hello extends React.Component {
        press = () => alert("Привет");
        render() {
            return <button onClick={this.press}>button</button>;
        }
    }`}
              </code>
            </pre>
      </div> 
      <div className="content_text"> 
            <p> 3. Функцию обработчика событий можно определить как обычный метод класса, а вызвать с помощью стрелочной функции.</p>
      </div>
      <div className="content_code">
            <pre>
              <code>
            {`
    class Hello extends React.Component {
        press () {
            alert("Привет"); 
        }
        render() {
            eturn <button onClick={() => this.press()}>button</button>;
        }
    }`}
              </code>
            </pre>
      </div> 
      <div className="content_text"> 
      <p><b>Объект Event</b></p>
      <p> Внутри функции, привязанной к обработчику событий, доступен объект Event. В переменную event попадает
         не родной объект Event браузера, а специальная кроссбраузерная обертка над ним со стороны React -  SyntheticEvent.
         Эта обертка помогает событиям работать одинаково во всех браузерах.</p>
      </div>
      <div className="content_code">
            <pre>
              <code>
            {`
    function App() {
        function func(event) {
            console.log(event); // объект с событием
        }
        
        return <div>
            <button onClick={func}>button</button>
        </div>;
    }`}
              </code>
            </pre>
      </div>    
      <div className="box_arrow">
                <Link className="arrow_prev" to="/lifecycle"> ⟵ </Link>
                <Link className="arrow_next" to="/key"> ⟶ </Link>
      </div>
        </>
    )

}

export default Events;