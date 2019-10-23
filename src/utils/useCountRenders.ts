import React from 'react';

export const useCountRenders = () => {
  const renders = React.useRef(0);
  console.log('Renders: ', renders.current++);
};