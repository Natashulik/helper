import React from "react";
import { Link } from "react-router-dom";

function UseEffect() {
    return(
    <>
    <h2 className="content_title">useEffect</h2>
    <div className="content_text">
        <p> Основная задача хука useEffect заключается в том, чтобы дать понять, что сейчас компонент что-то сделал.
            Например: у нас есть кнопка, и нам надо понять, что эта кнопка внедрилась в страницу; или нам надо понять, что компонент произвел 
            обновление или был удален.
        </p>
        <p>  Этот хук фактически служит той же цели, что методы жизненного цикла componentDidMount, componentDidUpdate и componentWillUnmount
             в классах-компонентах. В качестве 1-го параметра принимает функцию, а в качестве 2-го  - зависимости.</p>
        <p> Различные  варианты использования useEffect:</p>
        <p> 1.  В качестве 2-го параметра принимает пустой массив [ ].  Здесь useEffect ни за какими переменными следить не будет.
             Он вызовется только 1 раз, когда отобразится компонент. Аналог componentDidMount.  </p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
     useEffect ( () => {
        console.log('Компонент был отображен');
      }, []);`}           
        </code>
      </pre>
    </div>
    <div className="content_text">
        <p>2. В качестве 2-го параметра useEffect ничего не принимает. В таком случае useEffect будет выполняться,
         когда будет происходить  отображение 1-й раз и каждый раз, когда будут происходить обновления. Аналог 
         componentDidMount + componentDidUpdate.</p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
     useEffect ( () => {
        console.log('Компонент был отображен или обновлен');
      });`}           
        </code>
      </pre>
    </div>
    <div className="content_text">
        <p>3. В качестве 2-го параметра useEffect принимает массив с зависимостью. Функция вызовется,
            только если в переменной numbers были изменения. Аналог componentDidUpdate.</p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
     useEffect ( () => {
        console.log('Компонент был обновлен');
      }, [numbers]);`}           
        </code>
      </pre>
    </div>
    <div className="content_text">
        <p>4. В качестве 2-го параметра  массив с несколькими переменнеыми. Функция вызовется,
         если были изменения в переменных numbers или counts. Аналог componentDidUpdate.</p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
     useEffect ( () => {
        console.log('Компонент был обновлен');
      }, [numbers, counts]);`}           
        </code>
      </pre>
    </div>
    <div className="content_text">
        <p>5. В качестве первого параметра useEffect принимает функцию, которая возвращает другую функцию. Аналог componentWillUnmount.</p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
     useEffect ( () => {
        console.log('Компонент был отображен');  // код подписки на ресурс
        return() => {
            console.log('Компонент удален');     // код отписки от ресурса
        }
      }, []);`}           
        </code>
      </pre>
    </div>
    <div className="box_arrow">
                <Link className="arrow_prev" to="/memo"> ⟵ </Link>
                <Link className="arrow_next" to="/router"> ⟶ </Link>
      </div>
    </>
    )
}

export default UseEffect;