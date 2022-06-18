import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTodos } from "../redux/actions/Todo";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const store = useSelector((state) => state.todos);
  console.log("store", store);
  const addTodo = () => {
    dispatch(
      addTodos({
        id: id,
        item: todo,
        completed: false,
      })
    );
    setTodo("");
    setId(id + 1);
  };

  return (
    <div>
      {" "}
      <input
        name="todo"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button className="add-todo" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default Todo;
