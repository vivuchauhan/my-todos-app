import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";
import LoginForm from "./components/LoginForm";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

const App = () => {
    return (
      <Router> 
        <AuthProvider>
          <TodoProvider>
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route
                path="/todos"
                element={
                  <div>
                    <AddTodoForm />
                    <TodoList />
                  </div>
                }
              />
            </Routes>
          </TodoProvider>
        </AuthProvider>
      </Router>
    );
};

export default App;
