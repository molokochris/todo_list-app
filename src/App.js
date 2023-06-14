import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="container">
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
      </Routes>
      
      <footer>&copy;</footer>
    </div>
  );
}

export default App;
