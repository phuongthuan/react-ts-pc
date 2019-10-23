import React, { useState } from 'react';
import Count from '../components/Count';
import { Button } from '../styles/style'

interface IProps {

};

const MemoDemo: React.FC<IProps> = () => {
  const [text, setText] = useState('')
  const [data, setData] = useState({ isEven: false })
  return (
    <div>
      <h1>React Memo-Demo</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
      <br />
      <p>When we typing, the <code>Count</code> Component should not be rendered 😬.</p>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <Count
        data={data}
        onOdd={
          () => setText('')
        } />
      <Button
        onClick={() => setData({ isEven: !data.isEven })}
      >
        Change Data Object
      </Button>
    </div >
  );
}

export default MemoDemo;