import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {

    return(
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(item => (
          <Todo
            item={item}
            text={item.text}
            key={item.id}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ul>
    </div>
    );
}

export default TodoList;