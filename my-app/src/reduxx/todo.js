import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './action';

import "./todo.css"



const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const [text, setText] = useState('');


  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };


    return (
        <>
        <div  className="todo-container">
        <h1 style={{textAlign:"center"}}>To-Do Application</h1>
        <div className="container">
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="add-btn" onClick={handleAddTodo}>Add Todo</button>
          </div>
          <ul>
            {todos.map(todo => (
              <li key={todo.id} >
                {todo.text}
                <button className="remove-btn" onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
        </div>
        </>
      );
    };
export default TodoList;
