import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="container-main">
      <nav className="head">
        <Link to="/">
          <img src="./logo.png" alt="" />
        </Link>
      </nav>
      <ToastContainer theme="colored"></ToastContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
      <footer>&copy;</footer>
    </div>
  );
}

export default App;
