import React from "react";
import { Link } from "react-router-dom";
import MemoComponent from "./MemoComponent";
import MemoComponent2 from "./MemoComponent2";

function Memo() {
return(
    <>
      <h2 className="content_title">React.memo</h2>
      <div className="content_text">
        <p> Мемоизация — это метод оптимизации, используемый для ускорения работы компьютерных программ путем кеширования 
           результатов вычислений для последующего использования.</p>
        <p> React.memo — это компонент высшего порядка, вспомогательная функция, которая принимает компонент реакта и
           возвращает мемоизированную версию этого компонента. И если пропсы не менялись, то перерисовки компонента не будет. </p>
        <p> Например, у нас есть компонент MemoExample, который содержит Component, а также
           имеет счетчик counter. Сomponent  - это простой компонент, он лишь выводит  один и тот же текст.
           Однако при изменении счетчика Component тоже будет перерисовываться.</p>
      </div>
      <div className="content_code">
      <pre> 
        <code> 
        {`
    const Component = () => {
      console.log("Component rendered");
      return (
          <p>Text</p>
      )
    }
    const MemoExample = () => {
      const [counter, setCounter] = React.useState(0)
      return (
        <>
          <div>Count: {counter}</div>
          <Component />
          <button onClick={() => setCounter(counter + 1)}>increase count</button>
        </>
      )
    }`}           
        </code>
      </pre>
    </div>
    <div className="content_text">
      <p> После обновления счетчика до 3-x в консоли будет 4 записи "Component rendered". Одна — для начального рендеринга,
         а остальные 3 — для каждого изменения переменной счетчика. Чтобы Component не рендерился при изменении переменной counter, 
         можно обернуть его в React.memo.</p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
    const Component = React.memo(function Component(props) {
      console.log("Component  rendered");
      return (
          <p>Text</p>
      )
    });
    const MemoExample = () => {
      const [counter, setCounter] = React.useState(0)
      return (
        <>
          <div>Count: {counter}</div>
          <Component />
          <button onClick={() => setCounter(counter + 1)}>increase count</button>
        </>
      )
    }`}           
        </code>
      </pre>
  </div> 
    <div className="content_text">
      <p>Теперь Component оставляет только одну запись в консоли для первоначального рендеринга
         и ни одной записи после этого.</p>
    </div>
    <div className="content_text">
      <p>Аналогом в классовых компонентах выступает метод shouldComponentUpdate().</p>
    </div>
    <h2 className="content_title">useMemo</h2>
    <div className="content_text"> 
    <p>В функциональном компоненте у нас могут быть функции, которые производят вычисления для получения
      новых значений в компонентах. С помощью хука useMemo мы можем указать, какую функцию мемоизировать
      и при каком условии. Работает похоже как useEffect.
      </p>
     <p> Например, у нас есть компонент c двумя состояниями. Первое состояние по клику на текст будет менять 
      его цвет, а второе это функция, которая по клику на кнопку, будет увеличивать счетчик на +1 и вызывать
      функцию sum(), в которой производится сложение входящего параметра с самим собой и как результат получится
      сумма этого вычисления. </p></div>
      <div className="content_code">
      <pre> 
        <code> 
        {`
    const sum = n => {
      console.log('Вызвали функцию sum');
      return n + n;
    };
    
    const MemoComponent = () => {
      const [num, setNum] = useState(1);
      const [isGreen, setIsGreen] = useState(true);
      const result = sum(num);
    
      return (
        <div>
          <h2 onClick={() => setIsGreen(!isGreen)} style={{color: isGreen ? "green" : "red"}}>
            Example
          </h2>
          <h2>
            Sum {result}
          </h2>
          <button onClick={() => setNum(num + 1)}>button</button>
        </div>
      );
    };`}           
        </code>
      </pre>
  </div> 
    <MemoComponent/>
    <div className="content_text"> 
    <p>В данном примере есть небольшая проблема. Каждый раз, когда мы кликаем по тексту,  происходит вызов setIsGreen,
       что приводит к перерендериванию компонента и, как следствие, повторный вызов функции sum(). В консоли мы увидим 
       "Вызвали функцию sum", хотя функция должна вызываться только по клику на кнопку. Для того, чтобы оптимизировать 
        такие промежуточные вычисления можно обернуть функцию sum() в useMemo и передать вторым параметром в массиве num как 
       зависимость, при изменении значения которой происходит повторный вызов функции sum().</p>
       </div>
       <div className="content_code">
      <pre> 
        <code> 
        {`
    const sum = n => {
      console.log('Вызвали функцию sum');
      return n + n;
    };
    
    const MemoComponent = () => {
      const [num, setNum] = useState(1);
      const [isGreen, setIsGreen] = useState(true);
      const result = useMemo(() => sum(num), [num]);
    
      return (
        <div>
          <h2 onClick={() => setIsGreen(!isGreen)} style={{color: isGreen ? "green" : "red"}}>
            Example
          </h2>
          <h2>
            Sum {result}
          </h2>
          <button onClick={() => setNum(num + 1)}>button</button>
        </div>
      );
    };`}           
        </code>
      </pre>
  </div> 
  <MemoComponent2 />
  <div className="content_text"> 
  <p>Теперь  сколько бы раз мы ни кликали на текст, будет лишь меняться его цвет. Функция sum() вызываться не будет, и в консоли
    мы не увидим сообщение о ее вызове. 
  </p>
  </div>
  <div className="box_arrow">
                <Link className="arrow_prev" to="/fragment"> ⟵ </Link>
                <Link className="arrow_next" to="/useeffect"> ⟶ </Link>
      </div>
    </>
)
}

export default Memo;