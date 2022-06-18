import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { removeTodo, completeTodo } from "../redux/actions/Todo";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const dispatch = useDispatch();
  const store = useSelector((state) => state.todos);

  useEffect(() => {
    setTodoList(store.todoList);
  }, [store.todoList]);

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const todoCompleted = (id) => {
    dispatch(completeTodo(id));
    console.log("first");
  };

  return (
    <div className="todo-container">
      TODO LIST
      {todoList &&
        todoList.map((todo, idx) => (
          <li key={idx} className="todo-list">
            <span
              style={
                todo.completed
                  ? {
                      textDecoration: "line-through",
                    }
                  : null
              }
            >
              {todo.item}{" "}
            </span>
            <button
              style={{ color: "red" }}
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
            {todo.completed === false && (
              <button
                style={{ color: "green" }}
                onClick={() => todoCompleted(todo.id)}
              >
                Complete
              </button>
            )}{" "}
          </li>
        ))}
    </div>
  );
};

export default TodoList;
