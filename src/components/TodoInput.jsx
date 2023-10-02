import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

function TodoInput({ setTodos, todos }) {
  const [input, setInput] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      const uniqueId = uuid().slice(0, 8);
      console.log(uniqueId);
      const arr = [...todos, { id: uniqueId, title: input, done: false }];
      // setTodos((prev) => {[
      //   ...prev,
      //   { id: prev.length + 1, title: input, done: false },
      // ]});
      setTodos(arr);
      localStorage.setItem("todoList", JSON.stringify(arr));
      setInput("");
    }
  };
  return (
    <form onSubmit={addTodoHandler} className="todoInputFormContainer">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todoInput"
        required
        minLength={3}
      />
      <button type="submit" className="todoInputAddBtn">
        Add
      </button>
    </form>
  );
}
export default TodoInput;

TodoInput.propTypes = {
  setTodos: PropTypes.func,
  todos: PropTypes.array,
};
