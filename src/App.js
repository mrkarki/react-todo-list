import React from 'react';
import logo from './logo.svg';
//import './App.css';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInpute';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoInput/>
      <TodoList/>
<h1>Hello from app</h1>
    </div>
  );
}

export default App;
