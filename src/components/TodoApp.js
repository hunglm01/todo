import React, { useState } from "react";
import Header from "./layout/Header";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import axios from "axios";
import Footer from "./layout/Footer";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const handleCheckboxChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((reponse) => setTodos(todos.filter((todo) => todo.id !== id)));
  };

  const addTodo = (title) => {
    const todoData = {
      title: title,
      completed: false,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/todos", todoData)
      .then((response) => {
        console.log(response.data);
        setTodos([...todos, { ...todoData }]);
      });
  };

  useState(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => setTodos(response.data));
  }, []);

  return (
    <div className="container">
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos
        todos={todos}
        handleCheckboxChange={handleCheckboxChange}
        deleteTodo={deleteTodo}
      />
      <Footer />
    </div>
  );
};

export default TodoApp;
