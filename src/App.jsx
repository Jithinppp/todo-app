import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import TodoInput from "./components/TodoInput";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // 1 check if the todo-list in the local storage
  // if todo in local storage set it to todo
  // else create a empty one in local storage

  useEffect(() => {
    const items = localStorage.getItem("todoList");
    if (!items) {
      localStorage.setItem("todoList", JSON.stringify(todos));
      console.log(localStorage.getItem("todoList"));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todoList")));
    }
  }, []);

  return (
    <div className="mainContainer">
      <Navigation />
      {/* input to add todo */}
      <TodoInput setTodos={setTodos} todos={todos} />
      {/* list of todo */}
      {todos.length > 0 ? (
        <TodoItems todos={todos} setTodos={setTodos} />
      ) : (
        <p>No todos add one!!</p>
      )}
    </div>
  );
}
export default App;
