import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from "./Types";

let nextTodoId = 0;

export const addTodos = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: id,
});
