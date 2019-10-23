import React, { useState } from 'react';
import Increment from '../components/Increment';

interface IProps {

};

const UseCallBackHook: React.FC<IProps> = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React useCallback Hook</h1>
      <p>useCallBack prevent re-create function everytime.</p>
      <br />

      <p><b>Count = {count}</b></p>
      <Increment increment={() => setCount(count + 1)} />

    </>
  );
}

export default UseCallBackHook;