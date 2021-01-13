import React from "react";

function TodoList({ item, index, onCompleted }) {
  const styledComplete = item.isCompleted ? "complete" : null;

  return (
    <li>
      <div className="todo-item">
        <span className={styledComplete}>{item.item}</span>
        <div className="action">
          <button onClick={() => onCompleted(index)}>
            <i className="fa fa-check" aria-hidden="true"></i>
          </button>
          <button>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoList;
