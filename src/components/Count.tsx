import React, { useState } from 'react';
import { Button } from '../styles/style'

interface IProps {
  data: Object
  onOdd: Function
};

const Count: React.FC<IProps> = React.memo(({ onOdd }) => {
  const [count, setCount] = useState(0)
  const renders = React.useRef(0)
  return (
    <>
      <h3>Count Component Re-renders: {renders.current++}</h3>
      <h3>Count: {count}</h3>
      <Button
        onClick={() => {
          if (count % 2 === 0) {
            onOdd()
          }
          setCount(c => c + 1)
        }}
      >
        Increment
      </Button>
    </>
  );
},
  // When memo should update?
  (prevProps: any, nextProps: any) => {
    // if data object has changed, that we re render
    if (prevProps.data.isEven !== nextProps.data.isEven) {
      console.log('rerender');
      return false
    }
    return true
  }
)

export default Count;