import React from 'react';
import './App.css';
import Button from './components/Button';
import {CounterProvider} from './provider/Counter'
function App() {
  return (
    <CounterProvider>
      <div className="App">
        {/* onClick is not required it is a optional(using ? mark) so hear not give a error  */}
        <Button text='Hello'></Button>
        <Button text={true} onClick = {() => alert("Hey Click Me")}></Button>
      </div>
    </CounterProvider>
  );
}

export default App;
