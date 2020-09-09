import React from 'react';
import TodoList from './TodoList';


const Todo = ({text, todos, setTodos, item }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== item.id ));
        // console.log(item.filter());
    };

    const completeHandler = () => {
        setTodos(todos.map(memb => {
            if(memb.id === item.id){
                return{
                    ...memb, completed: !memb.completed,
                };
            }
            return memb;
        }))
    }

    return(
        <div className="todo">
            <li className={`todo-item ${item.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}
export default Todo;