import React, { useReducer } from 'react'
import { Layout, Button } from '../styles/style';

function reducer(state: number, action: { type: string }) {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1;
    default:
      return state
  }
}

const Post: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <Layout>
      <p>Count: {count}</p>
      <Button onClick={() => dispatch({ type: 'increment' })}>Increment</Button>
      <Button onClick={() => dispatch({ type: 'decrement' })}>Decrement</Button>
    </Layout>
  )
}

export default Post
