import React from "react";

const ManyRedering = ({ ...props }) => {
  return (
    <>
      {Array.from({ length: 100 }, (_, i) => {
        if (i === 99) console.log("render last item!!", i);
        return <div key={i}>Hello gamza, my id : {i}</div>;
      })}
    </>
  );
};

export default React.memo(ManyRedering);
// export default ManyRedering;
