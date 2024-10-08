import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul className="container d-flex flex-column gap-3 pb-5 pt-3 rounded bg-success-subtle ">
      {todos.length === 0 ? (
        <p className="fw-bold ms-5">No todos available</p>
      ) : (
        todos.map((todo, index) => <TodoItem key={todo.id} todo={todo}   index={index + 1}/>)
      )}
    </ul>
  );
};

export default TodoList;
