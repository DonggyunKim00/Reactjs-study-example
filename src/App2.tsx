// useCallback, React.memo 예제
// 부모 컴포넌트 상태 변화로 인한
import React, { useState, useCallback, useEffect, Profiler } from "react";
import ManyRedering from "./ManyRedering";

export default function App2() {
  const [state, setState] = useState(0);

  const onClick = useCallback(() => {}, []);

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
      <ManyRedering onClick={onClick} />
    </Profiler>
  );
}

// 참고 : https://youtu.be/HHKV9XbXUOw?si=uP_gB7kpuMbRMzo9

// localization key props
// portal - 부모밖에서 렌더링시키는 개념 - createProtal
