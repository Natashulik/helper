import React from "react";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";

function Refs(){
    return(
        <>
         <h2 className="content_title">Refs</h2>
         <div className="content_text">
            <p>Ref (ссылка) — это простой объект JavaScript с одним свойством, называемым current, которое мы можем установить 
            или прочитать. Если мы хотим, чтобы компонент «запоминал» некоторую информацию, но не хотим, чтобы эта информация
              запускала новые рендеры, мы можем использовать ref .</p>
            <p>Refs позволяют обращаться к конкретному DOM-элементу. Это аналог  метода getElementById. Атрибут ref может
             применяться к любому элементу веб-страницы. После установки атрибута мы можем ссылаться на этот элемент. </p>
            <p> Для создания ссылок ref применяется функция React.createRef(). А затем созданная ссылка прикрепляется к
             какому-нибудь элементу на html-странице. </p>
         </div>
         <div className="content_code">
      <pre> 
        <code> 
        {`
    class UserForm extends React.Component {
        constructor(props) {
            super(props);
            this.nameField = React.createRef();
            this.handle = this.handle.bind(this);
        }
        handle() {
             alert(this.nameField.current.value);  //обращаемся к свойству current
        }
        render() {
            return <>
                     <input ref={this.nameField} />
                     <button onClick = {this.handle}> отправить </button>
                   </>;
      }
    };`}           
        </code>
      </pre>
    </div>
    <div className="content_text">
        <p> На странице  мы увидим:</p>
    </div>
    <UserForm/>
    <h2 className="content_title">хук useRef</h2>
    <div className="content_text">
        <p>В функциональных компонентах используется хук useRef. В качестве параметра useRef() принимает
             начальное значение хранимого объекта. А возвращает useRef ссылку-объект, из свойства current которого
              можно получить хранимое значение.</p> 
    </div>   
    <div className="content_code">
      <pre> 
        <code> 
        {`
    function UserForm() {
        const nameField = React.useRef(null);  //начальное значение null
        const handle = () => {
            alert(nameField.current.value);     //обращаемся к свойству current
        };
        return (
          <div>
            <input ref={nameField} />
            <button onClick={handle}> отправить </button>
          </div>
        );
      }`}           
        </code>
      </pre>
    </div>
    <div className="box_arrow">
                <Link className="arrow_prev" to="/key"> ⟵ </Link>
                <Link className="arrow_next" to="/async"> ⟶ </Link>
      </div>
        </>
    )

}

export default Refs;