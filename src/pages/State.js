import React from "react";
import Counter from "./Counter";
import Input from "./Input";
import { Link } from "react-router-dom";

function State() {
return(
    <>
    <h2 className="content_title">State (class, function- useState)</h2>
    <div className="content_text">
        <p>Стейты - это реактивные переменные компонентов. Реактивность означает, что при изменении 
            стейта изменения произойдут во всех местах, где этот стейт используется. Технически 
            это достигается путем перерендерования всего компонента при изменении какого-либо стейта. </p>
        <p> Объект state применяется только в классах-компонентах. В функциональных же компонентах
         для управления состоянием  используются хуки.
        </p>
        <p> <b>В классовых компонентах</b> объект state устанавливается в конструкторе класса:
        </p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
    class Hello extends React.Component {
        constructor(props) {
            super(props);
            this.state = {welcome: "Привет"};
        }
        render() {
            return <h1>{this.state.welcome}</h1>;
        }
    }`}           
        </code>
      </pre>
    </div>
    <div className="content_text">
        <p> Нельзя менять стейт напрямую: </p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
   this.state.welcome = "Здравствуйте";    // так нельзя !!!`}           
        </code>
      </pre>
    </div>
    <div className="content_text">
        <p> Для обновления состояния вызывается функция setState():
        </p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
   this.setState({welcome: "Здравствуйте"});`}           
        </code>
      </pre>
    </div>
    <div className="content_text"> 
      <p> В качестве примера сделаем кнопку, при нажатии на которую, будет увеличиваться счетчик:
      </p>
    </div>
    <div className="content_code">
       <pre>
        <code>
        {`
   class Counter extends React.Component {
     constructor(props) {
        super(props);
        this.state = {count: 0};
     }
     handle = () => this.setState(state=> ({count: state.count+1}));

     render() {
        return <div>
            <p className="counter">{this.state.count}</p>
            <button onClick={()=>this.handle()} className="counter_button"> button </button>
        </div>
     }
   }`}      
        </code>
       </pre>
    </div>
    <div className="content_text"> 
      <p> В результате на странице увидим следующее:
      </p>
    </div>
    <Counter />
    <div className="content_text"> 
      <p> <b>В функциональных компонентах </b> для создания стейта используется хук useState. 
      Чтобы воспользоваться им, необходимо импортировать useState из 'react':
      </p>
    </div>
    <div className="content_code">
        <pre>
            <code>
            {`
    import React, { useState } from 'react';`}           
            </code>                
        </pre>
    </div>
    <div className="content_text"> 
      <p> Функция useState параметром принимает начальное значение стейта, а своим результатом 
        возвращает специальный массив из двух элементов. В первом элементе массива будет хранится 
        текущее значение стейта, а во втором - функция для изменения стейта.
      </p>
      <p> В качестве примера сделаем input, в который будут вводиться числа. По мере ввода числа в
         инпут в абзац  будет выводитьсяя квадрат вводимого числа:</p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
    function Input(){
        const [value, setValue] = useState(0);
        
        function handle (event) {
            setValue(event.target.value);
        }
        
        return <div>
            <input value={value} onChange={handle} />
            <p>{value ** 2}</p>
        </div>;
    }`}           
        </code>
      </pre>
    </div>
    <div className="content_text"> 
    <p> В результате на странице отобразится:
    </p>
    </div>
    <Input />
    <div className="box_arrow">
                <Link className="arrow_prev" to="/props"> ⟵ </Link>
                <Link className="arrow_next" to="/lifesycle"> ⟶ </Link>
      </div>
    </>
)
}

export default State;