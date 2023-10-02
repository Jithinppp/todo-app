import PropTypes from "prop-types";

function TodoItems({ todos, setTodos }) {
  // remove todo
  const removeTodo = (id) => {
    setTodos((prev) => {
      const arr = prev.filter((todo) => todo.id !== id);
      localStorage.setItem("todoList", JSON.stringify(arr));
      return arr;
    });
  };
  //   complete todo
  const completeTodo = (id) => {
    const completeArr = todos.map((todo) => {
      if (todo.id === id) {
        return { id: todo.id, title: todo.title, done: !todo.done };
      } else {
        return todo;
      }
    });
    localStorage.setItem("todoList", JSON.stringify(completeArr));
    setTodos(completeArr);
  };
  return (
    <div className="todoItemsContainer">
      {todos.map((item) => (
        <div key={item.id} className="todoItem">
          <div className={`checkboxTitleContainer ${item.done ? "done" : ""}`}>
            <button
              onClick={() => completeTodo(item.id)}
              className="controlButtons"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </button>
            <h3 className="todoTitle">{item.title}</h3>
          </div>
          <button
            onClick={() => removeTodo(item.id)}
            className="controlButtons"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
export default TodoItems;

// prop type validation with propTypes
TodoItems.defaultProps = {
  todos: [],
  setTodos: () => {},
};
TodoItems.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
};
