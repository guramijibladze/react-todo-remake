import React, { useState, useEffect, } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  const [ inputText, setInputText ] = useState("");
  const [ todos, setTodos ] = useState([]);
  const [ status, setStatus ] = useState('all');
  const [ filteredTodos, setFilteredTodos ] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  // console.log(inputText);

  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((item) => item.completed === true ));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((item) => item.completed === false ));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List </h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
        setStatus={setStatus}
        status={status}
        
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
