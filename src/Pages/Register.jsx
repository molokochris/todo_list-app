import React, { useContext, useState } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/users";
import { UserContext } from "../context/authContext";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("")
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (user.username === "" || user.email === "" || user.password === "") {
      setError("Enter valid details.")
      return
    };
    try {
      const response = await registerUser(user.username, user.email, user.password);
      if(!response) {
        setError("It seems like user already exists")
        return;
      }
      setLoggedIn(response);
      navigate("/todo");
    } catch (error) {
      setError("Encountered an error during registration.")
    }
  };


  return (
    <div className=" bg-green-950 text-white w-screen h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-white">Register</h2>
      <p className="text-sm mb-3">Welcome to MLab</p>
      <Form onSubmit={handleRegister}>
        <Input name="username" placeholder={"Username"} type={"text"} setValue={handleUserInput} />
        <Input name="email" placeholder={"Email"} type={"email"} setValue={handleUserInput} />
        <Input name="password" placeholder={"Password"} type={"password"} setValue={handleUserInput} />
        <Button />
        {error && <p className="text-red-600 text-xs">{ error } </p>}
      </Form> 
      <Link className="block my-1 text-xs text-gray-200" to="/">
        Have an account? Login
      </Link>
    </div>
  );
};

export default Register;
