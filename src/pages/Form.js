import React from "react";
import { Link } from "react-router-dom";
import FormExample from "./FormExample";

function Form() {
    return(
        <>
         <h2 className="content_title">Работа с формой</h2>
         <div className="content_text"> 
         <p> В React мы можем использовать все стандартные элементы форм, которые есть в html, но здесь 
            эти элементы имеют дополнительные возможности. В качестве примера создадим форму для ввода имени
            пользователя с возможностью условной отправки:</p>
          
         </div>
         <FormExample/>
         <div className="content_text"> 
         <p> У нас есть классовый компонент FormExample. В конструкторе создаем объект 
         state и задаем начальное значение для стейта - пустую строку в свойстве name, а также привязываем методы onChange 
         и handleSubmit к текущему контексту (this) с помощью метода bind.</p>
          <p> Метод onChange получает значение из инпута и устанавливает его в state в свойстве name.</p>
          <p>Метод handleSubmit вызывается при отправке формы и предотвращает ее стандартное поведение (перезагрузку страницы),
            а также выводит сообщение с именем пользователя.</p>
           </div>
         <div className="content_code">
      <pre> 
        <code> 
        {`
    class FormExample extends React.Component {
        constructor(props) {
          super(props);
          this.state = {name: ""};
          this.onChange = this.onChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
        onChange(e) {
          let val = e.target.value;
          this.setState({name: val});
        }
        handleSubmit(e) {
          e.preventDefault();
          alert("Имя: " + this.state.name);
        }
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
               <label>Имя:</label><br />
               <input type="text" value={this.state.name} onChange={this.onChange}/><br />
               <input type="submit" value="Отправить" />
              </form>
          );
        }
      }`}           
        </code>
      </pre>
    </div>
    <div className="box_arrow">
      <Link className="arrow_prev" to="/context"> ⟵ </Link>
    </div>
        </>
    )
}

export default Form;