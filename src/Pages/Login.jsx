import React, { useContext, useState } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import { loginUser } from "../api/users";
import { UserContext } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const [loggedIn, setLoggedIn] = useContext(UserContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

 
  const [error, setError] = useState("");

  const handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(user.email, user.password);
      if(!response) {
        setError("Email and password do not match")
        return;
      }
      setLoggedIn(response);
      navigate("/todo");
    } catch (error) {
      setError("Encountered an error during login.")
    }
  };

  return (
    <div className="w-screen h-screen bg-green-950 text-white flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-white">Login</h2>
      <p className="text-sm mb-3">Welcome back to MLab</p>
      <Form onSubmit={handleLogin}>
        <Input
          name="email"
          placeholder={"Email"}
          type={"email"}
          setValue={handleUserInput}
        />
        <Input
          name="password"
          placeholder={"Password"}
          type={"password"}
          setValue={handleUserInput}
        />
        <Button />
        {error && <p className="text-red-600 text-xs">{ error } </p>}
      </Form>
      <Link className="block my-1 text-xs text-gray-200" to="/register">
        Don't have an account? Register
      </Link>
    </div>
  );
};

export default Login;
