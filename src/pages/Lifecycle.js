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
            <p>  <b>1.   constructor(props)</b> - метод, вызываемый при создании нового объекта. Он позволяет:
                <ul>
                    <li> сделать инициализацию компонента - создать любые поля (переменные, начинающиеся с  this)
                        или объявить состояние. Только в конструкторе мы можем установить state напрямую, перезаписывая
                        this.state.
                    </li>
                    <li> привязывать методы класса к экземпляру
                    </li>
                </ul>
             </p>
             <div className="content_code">
                <pre>
                    <code>
                    {`
   class Counter extends Component {
     constructor(props) {
       super(props);
       this.state = { counter: 0 };
       this.handle = this.handle.bind(this);
     }
     handleClick() {
        // ...
     }
   }`}
                    </code>
                </pre>
            </div>
            <div className="content_text">
              <p> В современном синтаксисе конструкторы нужны редко. Вместо этого можно переписать данный код,
                 используя публичные поля:</p>
            </div>
            <div className="content_code">
                <pre>
                    <code>
                    {`
    class Counter extends Component {
        state = { counter: 0 };
    
        handleClick = () => {
        // ...
        }
    }`}
                    </code>
                </pre>
            </div>
            <div className="content_text">
              <p> <b>2.  static getDerivedStateFromProps(props, state)</b> -  вызывается непосредственно перед 
              вызовом метода render, как при начальном монтировании, так и при последующих обновлениях. Он должен 
              вернуть объект для обновления состояния или null. Этот метод существует для редких случаев, когда 
              состояние зависит от изменений в пропсах. </p>
            </div>
            <div className="content_text">
              <p> <b>3. render() </b> - единственный обязательный метод в классовом компоненте. Вызов render() 
              отображает компонент на странице. Функция render() должна быть чистой. Это означает, что она 
              не изменяет состояние компонента, всегда возвращая один и тот же результат. </p>
            </div>
            <div className="content_text">
              <p> <b>4. componentDidMount() </b> - вызывается сразу после монтирования компонента. Вызывается он 
              только один раз и больше вызываться не будет, пока компонент не удалится и снова не отобразится на странице.
              Используется для отправки запросов на сервер, настройки подписок или управления узлами DOM. </p>
            </div>
            <div className="content_code">
                <pre>
                    <code>
                    {`
    componentDidMount(){
        console.log("Компонент только что смонтирован на странице");
    }`}
                    </code>
                </pre>
            </div>
            <div className="content_text">
              <p> <b>5. componentWillUnmount() </b> - вызывается перед удалением компонента из DOM. И до этого момента
              мы можем выполнить какое-то действие. Используется для отмены таймеров, сетевых запросов или очистки любых 
              подписок, созданных в componentDidMount(). </p>
            </div>
            <div className="content_code">
                <pre>
                    <code>
                    {`
    componentWillUnmount(){
        console.log("Сейчас компонент будет удален со страницы");
    }`}
                    </code>
                </pre>
            </div>
            <div className="content_text">
              <p> <b>6. shouldComponentUpdate(nextProps, nextState) </b> - вызывается каждый раз при обновлении объекта props или state.
               В качестве параметра передаются новый объект props и state. Эта функция должна возвращать true
               (надо делать обновление) или false (игнорировать обновление). По умолчанию возвращается true. 
               С помощью этого метода реакт определяет, можно ли пропустить повторный рендеринг. Метод нужен только для повышения 
               производительности.</p>
            </div>
            <div className="content_code">
                <pre>
                    <code>
                    {`
    shouldComponentUpdate(nextProps, nextState) {
        if (
          nextProps.width === this.props.width &&
          nextState.isHovered === this.state.isHovered
        ) {
            return false;  // Ничего не поменялось, поэтому нет необходимости в ререндере
        }
        return true;
      }
    `}
                    </code>
                </pre>
            </div>
            <div className="content_text">
              <p> <b>7. componentDidUpdate(prevProps, prevState) </b> - вызывается сразу после обновления компонента 
              (если shouldComponentUpdate возвращает true). В качестве параметров передаются старые значения объектов
               props и state. При начальном рендеринге метод не вызывается.</p>
            </div>
        </div>
        <div className="box_arrow">
                <Link className="arrow_prev" to="/state"> ⟵ </Link>
                <Link className="arrow_next" to="/events"> ⟶ </Link>
      </div>
        </>
    )
}


export default Lifecycle;