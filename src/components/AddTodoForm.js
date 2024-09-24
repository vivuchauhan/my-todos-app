import { useState, useRef, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { AuthContext } from "../context/AuthContext";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const inputRef = useRef(null);
  const { dispatch } = useContext(TodoContext);
  const { logout } = useContext(AuthContext);
  
  const addTodo = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    dispatch({
      type: "ADD_TODO",
      payload: { id: Date.now(), title, completed: false },
    });
    setTitle("");
    inputRef.current.focus();
  };
  const Logout = () =>{
    logout()
  }

  return (
   <>
    <div className="container w-50 text-center bg-light mt-5 rounded bg-success-subtle  py-2">
      <h3 className="fw-bold">My Todos App</h3>
    </div>
     <form onSubmit={addTodo} className="container d-flex w-50  gap-3 mt-1 border p-5 rounded bg-success-subtle">
     <input className="form-control w-50"
        ref={inputRef}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new to-do"
      />
      <button className="btn bg-primary text-white" type="submit">Add To-Do</button>
      <button className="btn bg-danger text-white ms-5 px-4" type="button" onClick={Logout}>logout</button>
    </form>
   </>
  );
};

export default AddTodoForm;
