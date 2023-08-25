import React from "react";
import TodoForm from "./TodoForm";
import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

export default function Todo(props) {
  const { todos, completeTodo, removeTodo, updateTodo } = { ...props };
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const updateSubmit = (value) => {
    updateTodo(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={updateSubmit} />;
  }

  return todos.map((todo, index) => (
    <div
      key={index}
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
    >
      <div
        key={todo.id}
        className="todo-text"
        onClick={() => {
          completeTodo(todo.id);
        }}
      >
        {todo.text}
      </div>
      <div className="icons">
        <AiOutlineEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className={todo.isComplete ? "edit-icon complete" : "edit-icon"}
        />
        <BsTrash
          onClick={() => removeTodo(todo.id)}
          className={todo.isComplete ? "delete-icon complete" : "delete-icon"}
        />
      </div>
    </div>
  ));
}
