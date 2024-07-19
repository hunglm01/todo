import React from "react";
import TodoItem from "./TodoItem";

//lam sao lay props tu TodoApp.js tren vao day
// import React from 'react'

export default function Todos(props) {
  const {todos, handleCheckboxChange, deleteTodo} = props;
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem 
          todo={todo} 
          handleCheckboxChange={handleCheckboxChange}
          deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
