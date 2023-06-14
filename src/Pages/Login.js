import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, emailChange] = useState("");
  const [pass, passChange] = useState("");
  const [users, setUsers] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/user");
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const isValid = (users) => {
    let isProceed = false;
    users.map((user) => {
        if (email == user.email && pass == user.pass) {
            isProceed = true;
        }
    });
    return isProceed;
  } 

  const handleSubmit = (e) => {
    // e.preventDefault();
    (isValid(users)) ? navigate("/") :
    // if (condition) {

    // } else {

    // }
    console.log(email, pass);
  };
  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <div class="mb-3">
          <input
            value={email}
            type="text"
            placeholder="email address"
            class="form-control"
            onChange={(e) => emailChange(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <input
            value={pass}
            type="password"
            placeholder="password"
            class="form-control"
            onChange={(e) => passChange(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <button type="submit" class="btn btn-dark">
            login
          </button>
          <Link to="/" className="btn btn-danger">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}
