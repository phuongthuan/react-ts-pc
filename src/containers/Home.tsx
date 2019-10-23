import * as React from 'react';
import { Button, Quotes } from '../styles/style';
import { useState, useEffect } from 'react';
import Spin from '../components/Spin';
import { wait } from '../utils/fakeApis';

interface Props {

};

const Home: React.FC<Props> = () => {
  const [quote, setQuote] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const getQuote = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(`https://api.kanye.rest/`);
      await wait()
      const quote = await res.json()
      setQuote(quote.quote)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div>
      <h1>Today Quote</h1>
      <Button onClick={() => getQuote()}>Get Quote</Button>

      {isLoading && <Spin />}

      {quote && (
        <Quotes>
          {quote}
        </Quotes>
      )}
    </div>
  );
}

export default Home;