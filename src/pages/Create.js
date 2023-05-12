import React from "react";
import { Link } from "react-router-dom";

function Create() {
    return(
      <>
      <h2 className="content_title">  Как создать первое react приложение? </h2>
      <div className="content_text"> 
          <p> Для создания react приложений используется такой инструмент как Create React App (CRA).
             Чтобы использовать Create React App, необходимо убедиться, что на компьютере установлена программа Node.js версии не ниже 14 и npm не ниже 5.6.</p>
            <p>Для проверки версии NodeJS необходимо в команднолй строке выполнить команду:</p>
      </div>
      <div className="content_code">
            <pre>
              <code>
            {`
    node -v
    `}  </code>
            </pre>
      </div>
      <div className="content_text"> 
            <p>Проверить установленную версию npm можно так:</p>
      </div>
      <div className="content_code">
            <pre>
              <code>
            {`
    npm -v
    `}
              </code>
            </pre>
      </div>
      <div className="content_text"> 
            <p>Для создания проекта в командной строке выполняются следующие команды:</p>
      </div>
    <div className="content_code">
            <pre>
              <code>
            {`
    npx create-react-app my-app
    cd my-app
    npm start`
    }
              </code>
            </pre>
      </div>
      <div className="content_text"> 
            <p>где my-app  - это имя создаваемого приложения. После этого появится папка my-app, содержащая в себе приложение. 
              Внутри нее будет находиться папка src - рабочая папка, в которой будет вестись разработка проекта.</p>
      
      </div>
       <div className="box_arrow">
                <Link className="arrow_prev" to="/about"> ⟵ </Link>
                <Link className="arrow_next" to="/component"> ⟶ </Link>
         </div>
      </>
    )
}

export default Create;