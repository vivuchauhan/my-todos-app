

import { useState, useRef, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { AuthContext } from "../context/AuthContext";
import TodoList from "../components/TodoList";
import background from '../images/backround.png';

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const [currentId, setCurrentId] = useState(0);
  const inputRef = useRef(null);
  const { todos, dispatch } = useContext(TodoContext); 
  const { logout } = useContext(AuthContext);

  const addTodo = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    const newId = currentId;

    dispatch({
      type: "ADD_TODO",
      payload: { id: newId, title, completed: false },
    });

    setCurrentId(currentId + 1);
    setTitle(""); 
    inputRef.current.focus(); 
  };


  const Logout = () => {
    logout();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <img src={background} alt="" className="" />
        </div>
        <div className="col-6 mt-5 pt-5">
          <div className="container text-center bg-light mt-5 rounded bg-success-subtle py-2">
            <h3 className="fw-bold">My Todos App</h3>
          </div>
          <form onSubmit={addTodo} className="container d-flex gap-3 mt-1 border p-5 rounded bg-success-subtle">
            <input
              className="form-control w-50"
              ref={inputRef}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a new to-do"
            />
            <button className="btn bg-primary text-white" type="submit">
              Add Item
            </button>
            <button className="btn bg-danger text-white ms-5 px-5" type="button" onClick={Logout}>
              Logout
            </button>
            {todos.length > 0 ? (
              <span className="bg-dark text-white rounded rounded-5 px-3 py-2 fw-bold">
                {todos.length}{todos.length > 1 ? '' : ''}
              </span>
            ) : (
              ""
            )}
          </form>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default AddTodoForm;
