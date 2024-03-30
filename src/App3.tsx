// useCallback, React.memo 예제
// 부모 컴포넌트 상태 변화, props 변화로 인한 리랜더링

import React, { useState, useEffect, useMemo, Profiler } from "react";
import ManyRedering from "./ManyRedering";

export default function App3() {
  const [state, setState] = useState(0);

  const obj = {
    name: "donggyun",
    age: 25,
  };

  const memoizationValue = useMemo(() => obj, []);

  useEffect(() => {
    setTimeout(() => {
      setState(1);
      console.log("state updated 😱");
    }, 1000);
  }, []);

  return (
    <Profiler
      id="manyrendering"
      onRender={(id, phase, actualDuration) => {
        console.log(actualDuration);
      }}
    >
      <ManyRedering obj={memoizationValue} />
    </Profiler>
  );
}

// https://ko.legacy.reactjs.org/docs/profiler.html
