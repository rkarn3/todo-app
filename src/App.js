import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="header">TODO APP REACT & REDUX</div>
      <Todo />
      <TodoList />
    </div>
  );
}

export default App;
