import React from "react";

export default function TodoItem(props) {
  const { todo, handleCheckboxChange, deleteTodo } = props;
  const id = todo.id;
  return (
    <li className="todo-item" key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleCheckboxChange(id)}
      />
      <span className={todo.completed ? "completed" : null}>{todo.title}</span>
      <button className="btn-style" onClick={()=> deleteTodo(id)}>X</button>
    </li>
  );
}
