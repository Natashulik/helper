import { useState } from "react";
import React from "react";
import { useMemo } from "react";
import { Link } from "react-router-dom";


const sum = n => {
  console.log('Вызвали функцию sum');
	return n + n;
 };

const MemoComponent2 = () => {
  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  const result = useMemo(() => sum(num), [num]);

  return (
    <div>
      <h2 onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "green" : "red" }}  className="memo_title"
      >
        Example
      </h2>
      <h2 className="memo_title">
        Sum {result}
      </h2>
      <button onClick={() => setNum(num + 1)}  className="counter_button">button</button>
    </div>
  );
};
export default MemoComponent2;