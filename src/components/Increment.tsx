import React from 'react';
import { Button } from '../styles/style'
import { useCountRenders } from '../utils/useCountRenders';

interface IProps {
  increment: any
};

const Increment: React.FC<IProps> = ({ increment }) => {
  useCountRenders();
  return (
    <>
      <Button onClick={increment}>Increment</Button>
    </>
  );
}

export default Increment;