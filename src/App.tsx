import React from 'react';
import './App.css';
import CounterContainer from "./containers/CounterContainer";
import TodoApp from "./containers/TodoApp";
function App() {
  return (
    <div className="App">
      <h1>react-redux With Typescript tutorial</h1>
        <CounterContainer/>
        <h3>TodoAPP</h3>
        <TodoApp/>
    </div>
  );
}

export default App;
