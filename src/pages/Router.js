import React from "react";
import { Link } from "react-router-dom";

function Router() {
    return(<>
      <h2 className="content_title">Router</h2>
      <div className="content_text"> 
      <p>В React имеется своя система маршрутизации, которая позволяет сопоставлять запросы к приложению с определенными компонентами.
           Для работы с роутером в браузере необходимо установить модуль react-router-dom:</p>
      </div>
      <div className="content_code">
      <pre> 
        <code> 
        {`
      npm i --save react-router-dom`}           
        </code>
      </pre>
    </div>
    <div className="content_text"> 
    <p>После этого необходимо импортировать BrowserRouter. Он должен быть родительским компонентом 
    относительно всего приложения, поскольку он передает информацию о текущем местоположении всем дочерним элементам,
     вложенным в него. </p></div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
      import { BrowserRouter } from 'react-router-dom';
      
      const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
        );`}           
        </code>
      </pre>
    </div>
    <div className="content_text"> 
    <p>В компоненте App  необходимо импортировать Routes и Route. Объект Routes содержит набор маршрутов
        и позволяет выбрать  и использовать первый попавшийся маршрут. Каждый маршрут представлен объектом Route, имеющим следующие атрибуты:</p>
      <ul>
        <li>path - шаблон адреса, с которым будет сопоставляться запрошенный адрес URL;</li>
        <li>element - тот компонент, который отвечает за обработку запроса по этому маршруту.</li>
      </ul>  
      <p> Путь в виде звездочки "*" указывает, что этот маршрут будет сопоставляться со всеми адресами URL, которые не 
        соответствуют предыдущим маршрутам. И он будет обрабатываться компонентом NotFound. Таким образом, мы можем задать 
        обработку при обращении к несуществующим ресурсам в приложении.</p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
      import { Routes, Route } from "react-router-dom";
      import { Home } from "./pages/Home";
      import { About } from "./pages/About";
      import { Products } from "./pages/Products;
      import { NotFound } from "./pages/NotFound;

      function App() {
        return(
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        )
    }`}           
        </code>
      </pre>
    </div>
    <div className="content_text"> 
    <p>У react-router-dom есть компонент Link, который используется для создания ссылок. </p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
      import { Link } from "react-router-dom";
     
      function Home() {
        return (
          <nav>
            <Link to="/">Главная</Link>  
            <Link to="/about">О сайте</Link>  
            <Link to="/products">Товары</Link>
          </nav>
        );
      } `}           
        </code>
      </pre>
    </div>
    <div className="box_arrow">
                <Link className="arrow_prev" to="/useeffect"> ⟵ </Link>
                <Link className="arrow_next" to="/context"> ⟶ </Link>
      </div>

    </>
    )
}

export default Router;