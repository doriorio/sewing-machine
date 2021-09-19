import React, { useState, useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { QuoteContainer  } from './features/quote/QuoteContainer';

const initialState = {
  quotes: []
}

function App() {
  const [state, setState] = useState(0);
  
  useEffect(() => {
    console.log(state)
    console.log('mounted')
    return () => {
      
      let data = callBackEndAPI();
      console.log('unmounted');
    }
    
  }, [state]);
  //move this to quote
  async function callBackEndAPI() {
    const response = await fetch('/api');
    const body = await response.json();
    console.log(body);
    return body;
  };
  return (
    <div className="App" id="quote-box">
      <header className="App-header">
        
        <QuoteContainer />
      </header>
    </div>
  );
}

export default App;
