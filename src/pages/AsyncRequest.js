import React from "react";
import { Link } from "react-router-dom";

function AsyncRequest() {
    return( <>
    <h2 className="content_title">Отправка асинхронных запросов</h2>
    <div className="content_text">
        <p>Для сетевых запросов из JavaScript есть широко известный термин <b>«AJAX»</b> (аббревиатура от Asynchronous 
          JavaScript And XML). Асинхронный в данном случае означает, что действие выполняется в фоне (не в основном потоке), 
          и оно не мешает пользователю взаимодействовать со страницей. XML – это формат для хранения и передачи данных, в 
          настоящее время вместо него чаще используется JSON (но кроме них можно использовать и другие форматы).
        </p>
        <p>В результате AJAX-запроса при обновлении данных веб-страница не перезагружается полностью, и веб-приложения становятся 
            быстрее и удобнее.</p>
        <p>Взаимодействие с сервером через асинхронные запросы осуществляется посредством XHR или метода fetch, 
          либо можно использовать любую AJAX-библиотеку, например Axios или jQuery AJAX. Метод fetch — наиболее современный 
          и мощный. </p>
        <p>Лучшее всего делать асинхронный запрос в методе componentDidMount.</p>
        <p>Допустим, наш API возвращает следующий JSON-объект:</p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
    {  "items": [
          { "id": 1, "name": "Яблоки",  "price": "$2" },
          { "id": 2, "name": "Персики", "price": "$5" }
        ] 
    }`}           
        </code>
      </pre>
    </div>
    <div className="content_text">
      <p>Компонент ниже показывает, как в componentDidMount задать внутреннее состояние из результата AJAX-запроса.</p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
    class MyComponent extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            error: null,
            isLoaded: false,
            items: []
          };
        }
      
        componentDidMount() {
          fetch("https://api.example.com/items")
            .then(res => res.json())
            .then(result => {
                this.setState({
                  isLoaded: true,
                  items: result.items
                });
              }, error => {      //важно обрабатывать ошибки именно здесь, а не в блоке catch
                this.setState({   
                  isLoaded: true,
                  error });
              })
        }
        render() {
          const { error, isLoaded, items } = this.state;
          if (error) {
            return <div>Ошибка: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Загрузка...</div>;
          } else {
            return (<ul>
                {items.map(item => (
                  <li key={item.id}>
                    {item.name} {item.price}
                  </li>
                ))}
              </ul> );
        }}
    }`}           
        </code>
      </pre>
    </div>
    <div className="content_text">
        <p>Вот эквивалент с хуками:</p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
    function MyComponent() {
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);   //пустой массив зависимостей [] означает, что 
                             //этот useEffect будет запущен один раз, аналогично componentDidMount
        useEffect(() => {
          fetch("https://api.example.com/items")
            .then(res => res.json())
            .then(result => {
                setIsLoaded(true);
                setItems(result);
              }, error => {       //важно обрабатывать ошибки именно здесь, а не в блоке catch
                setIsLoaded(true);
                setError(error);
              })
        }, [])
      
        if (error) {
          return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Загрузка...</div>;
        } else {
          return (<ul>
              {items.map(item => (
                <li key={item.id}>
                  {item.name} {item.price}
                </li>
              ))}
            </ul>);
        }
      }`}           
        </code>
      </pre>
    </div>
    <div className="box_arrow">
                <Link className="arrow_prev" to="/refs"> ⟵ </Link>
                <Link className="arrow_next" to="/vdom"> ⟶ </Link>
      </div>

        </>
    )
}
export default AsyncRequest;