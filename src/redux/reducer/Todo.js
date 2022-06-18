import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from "../actions/Types";

const initialState = {
  todoList: [],
  //   singleTodo: {},
};

export default function (state = initialState, action) {
  console.log("action", action);
  switch (action.type) {
    case ADD_TODO: {
      const { id, item, completed } = action.payload;
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { id: id, item: item, completed: completed },
        ],
      };
    }
    case REMOVE_TODO: {
      return {
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };
    }
    case COMPLETE_TODO: {
      return {
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: true,
            };
          }
          return todo;
        }),
      };
    }
    default:
      return state;
  }
}
