import React from "react";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";

export default function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your task"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
          />
          <button className="input-btn edit" onClick={handleSubmit}>
            <AiOutlineEdit />
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Wanna do something?"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
          />
          <button className="input-btn" type="submit" onClick={handleSubmit}>
            +
          </button>
        </>
      )}
    </form>
  );
}
