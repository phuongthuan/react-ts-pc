/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useMemo } from 'react';
import { Button } from '../styles/style';
import _ from 'lodash'

interface IProps {

};

function calculateArea(edgeLength: number) {
  console.log('Area value: ', edgeLength * edgeLength)
  return edgeLength * edgeLength
}

const UseMemo: React.FC<IProps> = () => {
  const [edge, setEdge] = useState(10)
  const [perimeter, setPerimeter] = useState(20)

  const area = useMemo(() => calculateArea(edge), [edge]);

  const changeEdge = () => setEdge(e => e + 1);

  const changePerimeter = () => setPerimeter(_.random(10, 100));

  return (
    <>
      <h1>React useMemo Hook</h1>
      <p>This hook is used for optimize computed value.</p>

      <h1>Demo (Without Memo)</h1>

      <p>This value below has been computed every render even the dependencies not change (Open <code>console.log</code> for detail).</p>

      <p>Here's the <code>function</code> that we computed value:</p>

      <p></p>

      <h2>Perimeter = {perimeter}</h2>
      <h2>Area = {calculateArea(edge)} (edge = {edge})</h2>

      <p>
        Let's change edge plus 1, the Area will be updated and of couse the value has been re computed 👉🏻
        <Button onClick={changeEdge}>Change Edge</Button>
      </p>

      <p>
        But even the edge not change.
        Area still re-computed everytime when we change perimeter 👉🏻<Button onClick={changePerimeter}>Change Perimeter</Button> (Open <code>console.log</code> and see). Because when the parent render, all the child will be rendered 😟.
      </p>

      <hr />

      <h1>Demo (With Memo)</h1>
      <p>Let's take a look at another example which is using <code>useMemo</code>.</p>

      <h2>Perimeter = {perimeter}</h2>
      <h2>With <code>memo</code> 👉🏻 Area = {area} (edge = {edge})</h2>

      <p>
        And now when we click Change Edge button, the <code>area</code> value will be computed.
        But when Change Perimeter button clicked, it should not be re computed 😀
      </p>

      <Button onClick={changePerimeter}>Change Perimeter</Button>

      <p>👉🏻The value <code>area</code> no longer change 😁</p>

      <p>👉🏻See in <code>console.log</code></p>

    </>
  );
}

export default UseMemo;
