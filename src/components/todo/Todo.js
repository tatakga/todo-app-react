import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [todo, setTodo] = useState([
    {
      item: "Learning",
      isCompleted: false,
    },
    {
      item: "Watching",
      isCompleted: false,
    },
  ]);

  const onCompleted = (id) => {
    const newTodo = [...todo];
    newTodo[id].isCompleted = !newTodo[id].isCompleted;
    setTodo([...newTodo]);
  };

  const addTodo = (text) => {
    setTodo([...todo, { item: text, isCompleted: false }]);
  };

  return (
    <div className="todo">
      <div className="todo-header">
        <h1 className="app-title">Your Things</h1>
      </div>
      <div className="todo-content">
        <div className="todo-container">
          <TodoForm addTodo={addTodo} />
          <ul>
            {todo.map((item, index) => {
              return <TodoList key={index} item={item} index={index} onCompleted={onCompleted} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
