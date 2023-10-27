import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Todo from "./pages/Todo.jsx";
import AuthProvider from "./context/authContext.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<Register />} path="/register" />
          <Route element={<Todo />} path="/todo" />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
