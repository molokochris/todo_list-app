import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Registration() {
  // const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [surname, surnameChange] = useState("");
  const [email, emailChange] = useState("");
  const [pass, passChange] = useState("");

  //redirection

  const navigate = useNavigate();

  const isValid = () => {
    let isProceed = true;
    let errMessage = "All fields are required ";
    if (
      name === null ||
      name === '' ||
      surname === null ||
      surname === "" ||
      email === null ||
      email === "" ||
      pass === null ||
      pass === ""
    ) {
      isProceed = !isProceed;
      // errMessage += "name";
    }
    if (!isProceed) {
      toast.warning(errMessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        
      } else {
        isProceed = !isProceed;
        toast.warning('Email not valid!');
      }
    }
    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      let regObj = { name, surname, email, pass };
      console.log(regObj);

      //API Call:

      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regObj)
      })
        .then((res) => {
          toast.success("Registration Successful");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Registration Failed:" + err.message);
        });
    } else {
    }
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => nameChange(e.target.value)}
          className="names"
          type="text"
          placeholder="First Names"
        />
        <input
          value={surname}
          onChange={(e) => surnameChange(e.target.value)}
          className="names"
          type="text"
          placeholder="Surname"
        />
        <br />
        <input
          value={email}
          onChange={(e) => emailChange(e.target.value)}
          className=""
          type="email"
          placeholder="Email address"
        />
        <br />
        <input
          value={pass}
          onChange={(e) => passChange(e.target.value)}
          className=""
          type="password"
          placeholder="Password"
        />
        <button type="submit" className="btn btn-dark">
          Create account
        </button>
        <Link to="/" className="btn btn-danger">
          Back
        </Link>
      </form>
    </div>
  );
}
