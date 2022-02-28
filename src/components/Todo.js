import React, { useState } from "react";
import { TiDelete, TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="'icons">
        <TiDelete onClick={() => removeTodo(todo.id)} className="delete-icon" />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="delete-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
