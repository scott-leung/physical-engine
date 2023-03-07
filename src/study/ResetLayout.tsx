import React, { useEffect } from 'react';
import { getUniqueID } from './util';

export function ResetLayout(props: {
  children: React.ReactNode;
  // start function return a stop function
  start?: () => () => void;
}) {
  const [count, setCount] = React.useState(getUniqueID());

  useEffect(() => {
    return props.start?.();
  }, [count]);

  const handleReset = () => {
    // props.stop?.();
    setCount(getUniqueID());
  };

  return (
    <div>
      <div>{props.children}</div>
      <div>
        <button onClick={handleReset}>点击重置效果</button>
      </div>
    </div>
  );
}
