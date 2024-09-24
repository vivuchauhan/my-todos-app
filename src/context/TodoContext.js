import { createContext, useReducer, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const isDuplicate = state.some((todo) => todo.title.toLowerCase() === action.payload.title.toLowerCase());
      if (isDuplicate) {
        return state; 
      }
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [storedTodos, setStoredTodos] = useLocalStorage("todos", todos);

  useEffect(() => {
    if (storedTodos.length > 0) {
      storedTodos.forEach((todo) => dispatch({ type: "ADD_TODO", payload: todo }));
    }
  }, []);

  useEffect(() => {
    setStoredTodos(todos);
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
