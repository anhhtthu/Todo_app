import React from "react";
import TodoForm from "./TodoForm";
import Header from "./layout/Header";
import Todo from "./Todo";
import Counting from "./Counting";
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const countTodo = todos.length;

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoID, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoID ? newValue : item))
    );
    console.log(...todos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  return (
    <div className="todo-list">
      <div className="toto-title">
        <Header />
        <Counting countTodo={countTodo} />
      </div>

      <TodoForm onSubmit={addTodo} todos={todos} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}
