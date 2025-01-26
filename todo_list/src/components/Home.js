import React, { useState, useRef } from "react";
import "../App.css";

function Home() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy milk", isComplete: false },
    { id: 2, text: "Walk the dog", isComplete: false },
    { id: 3, text: "Do laundry", isComplete: true },
  ]);

  const handleToggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const handleAddTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, text, isComplete: false },
    ]);
  };

  return (
    <div>
      <h1> Todo List </h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`${todo.isComplete ? "strikeThru" : ""}`}
          >
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => handleToggleComplete(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Add new todo..." name="text" />
      <button onClick={(e) => handleAddTodo(e.target.value)}>Add</button>
    </div>
  );
}

export default Home;
