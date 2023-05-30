import React from "react";
import { Link } from "react-router-dom";

function Context() {
    return(
        <>
          <h2 className="content_title">Context</h2>
          <div className="content_text"> 
            <p> Контекст - это механизм, который помогает передавать данные от одного компонента в другой,
                минуя промежуточные компоненты. В стандартном react-приложении данные передаются сверху вниз по иерархии
                от родителя к потомку через props. Однако, если свойства, определенные на верхнем уровне, используются 
                только на нижнем и не используются в промежуточных, можно использовать механизм контекста. 
                React Context помогает отказаться от “пробрасывания” пропсов (props drilling).
            </p>
            <p> Например, у нас есть компонент Lesson, который рендерит компонент 1-го уровня Level1. Далее компонент Level1 рендерит
                компонент 2-го уровня Level2. А тот в свою очередь рендерит Level3. Компонет 3-го уровня рендерит уже разметку.
                Таким образом, нам пришлось изменить каждый компонент, чтобы передать пропсы на самый нижний уровень.
            </p>
          </div>
          <div className="content_code">
      <pre> 
        <code> 
        {`
    const Level3 = ({ title }) => <h1>{title}</h1>
    const Level2 = ({ title }) => <Level3 title={title} />
    const Level1 = ({ title }) => <Level2 title={title} />
      
    class Lesson extends Component {
      render() {
        return (
          <Level1 title="simple title" />
        );
      }
    }`}           
        </code>
      </pre>
    </div>
    <div className="content_text"> 
      <p>Этого можно избежать, если использовать Сontext. Для создания контекста используется метод React.createContext.
         Он имеет единственный параметр, в который можно передать дефолтное значение или объект для получения данных через контекст.</p>
    </div>
          <div className="content_code">
      <pre> 
        <code> 
        {`
    const context = React.createContext('value');`}           
        </code>
      </pre>
    </div>
    <div className="content_text"> 
      <p>Созданный сontext - это объект с двумя свойствами: Provider и Consumer. Они являются компонентами. В Provider помещаем значение,
         которое хотим передать вниз по иерархии компонентов. Потребительский компонент Consumer размещаем везде, где хотим использовать
         представленные в контексте данные. Внутри Consumer у нас есть доступ к пропу value компонента Provider. </p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
    const TitleContext = React.createContext();

    const Level3 = () => (
      <TitleContext.Consumer>
        { title => <h1> {title}</h1> }
      </TitleContext.Consumer>
    )
    const Level2 = () => <Level3 />
    const Level1 = () => <Level2 />
    
    class Lesson extends Component {
      render() {
        return (
          <TitleContext.Provider value="Заголовок"}>
            <Level1/>
          </TitleContext.Provider>
        );
      }
    }`}           
        </code>
      </pre>
    </div>
    <div className="content_text"> 
    <p>Если через контекст нам надо передать несколько значений, то в атрибут  провайдера value мы 
        передаем объект, в котором задаем необходимые значения.</p></div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
    <TitleContext.Provider value={ { title: "Заголовок", subTitle: "Подзаголовок"} }>
        <Level1/>
    </TitleContext.Provider>`}           
        </code>
      </pre>
    </div>
    <h2 className="content_title">useContext</h2>
    <div className="content_text"> 
    <p>Для использования контекста мы создаём объект UserContext: 
    </p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
    const UserContext = React.createContext();`}           
        </code>
      </pre>
    </div>
    <div className="content_text"> 
    <p>Затем подключаем провайдер и передаем данные в контекст через пропс value: 
    </p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
    <UserContext.Provider value={user}>
      <MyComponent />
    </UserContext.Provider>`}           
        </code>
      </pre>
    </div>
    <div className="content_text"> 
    <p>Получаем данные контекста в нашем компоненте: 
    </p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
    import React, { useContext } from 'react';
    const MyComponent = () => {
      const user = useContext(UserContext); // Возвращает контекст целиком
      return <h1>{user.name}</h1>;
    }`}           
        </code>
      </pre>
    </div>
    <div className="content_text"> 
    <p>Компонент, вызывающий useContext, всегда будет перерендериваться при изменении значения контекста. </p>
    </div>
    <div className="box_arrow">
                <Link className="arrow_prev" to="/router"> ⟵ </Link>
                <Link className="arrow_next" to="/form"> ⟶ </Link>
      </div>
          </>
    )
}

export default Context;