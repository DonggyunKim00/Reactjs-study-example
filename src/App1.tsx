// React.memo 예제
// 부모 컴포넌트 상태 변화로 인한 자식컴포넌트 리랜더링

import React, { useState } from "react";

const App1 = () => {
  console.log("Parents");
  const [count, setCount] = useState(0);
  const addCount = () => setCount((prev) => prev + 1);
  return (
    <div>
      <button onClick={addCount}>{"plus"}</button>
      <div>{count}</div>
      <Child />
    </div>
  );
};

const Child = React.memo(() => {
  console.log("child render");
  return <div>{"Child"}</div>;
});

export default App1;
