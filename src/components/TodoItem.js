import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ todo, index }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <div className="container d-flex gap-3 border-2 p-2 rounded bg-info-subtle">
      <p style={{ textDecoration:todo.completed ? "line-through" : "none" }} className="me-auto">{index} - {todo.title}</p>
      <div className="d-flex gap-3">
        <button onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })} className="btn py-0 px-5 text-white bg-dark">
          Toggle
        </button>
        <button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })} className="btn py-0 px-5 text-white bg-dark">
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
