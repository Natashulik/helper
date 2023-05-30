import React from "react";
import { Link } from "react-router-dom";

function Key() {
return(
    <>
    <h2 className="content_title">Key</h2>
    <div className="content_text">
        <p>Key (ключ) - это специальный атрибут, который нужно указывать при создании списка элементов.
            Если этого не сделать, то в консоли будет предупреждение: Warning: Each child in a list should have 
            a unique “key” prop.
        </p>
        <p>Ключи помогают React определять, какие элементы были изменены, добавлены или удалены. Без key механизм
         reconciliation сверяет компоненты попарно между текущим и новым виртуальным DOM. Из-за этого может происходить большое количество
         лишних перерисовок интерфейса, что замедляет работу приложения. 
         </p>
         <p>Например, у нас есть массив имен ['Паша', 'Саша']. При добавлении имени 'Гриша' в начало массива мы получим ['Гриша', 'Паша', 'Саша'].
            React сравнит  'Паша' и 'Гриша' и обновит элемент, затем сравнит 'Саша' и 'Паша' и также обновит, и в конце создаст  имя 'Саша'. То есть
            будут обновлены все элементы  массива.
         </p>
         <p>Если же мы добавляем key, механизм reconciliation будет сверять  key не попарно, а будет искать компоненты с тем же key, что уменьшает 
            количество перерисовок интерфейса.</p>
        <p>Лучше всего в качестве ключа использовать ID данных. Это позволит явно отличить элемент от его соседей:</p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
    const todoItems = todos.map((todo) =>
        <li key={todo.id}>
        {todo.text}
        </li>
    );`}           
        </code>
      </pre>
    </div>
    <div className="content_text">
        <p>Если же нет заданных ID, то в крайнем случае в качестве ключа можно использовать индекс элемента:</p>
    </div>
    <div className="content_code">
      <pre> 
        <code> 
        {`
    const todoItems = todos.map((todo, index) =>
        <li key={index}>      //так можно делать только если у элементов массива нет ID
        {todo.text}
         </li>
    );`}           
        </code>
      </pre>
    </div>
    <div className="box_arrow">
                <Link className="arrow_prev" to="/events"> ⟵ </Link>
                <Link className="arrow_next" to="/refs"> ⟶ </Link>
      </div>
    </>
)
}

export default Key;