import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { toast } from "react-toastify";

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid(users)) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/Dashboard");
    } else {
      toast.error("failed to log in, check your details and try again");
    }
    console.log(email);
    // fetch("http://localhost:8000/user/"+email).then((res) => {
    //     return res.json();
    // }).then((resp) => {
    //     if(Object.keys(resp).length===0) {
    //     toast.error('Email address not found');
    //     }else{
    //     if (resp.pass === pass){
    //         navigate('/')
    //     }else{
    //         toast.error('Password wrong')
    //     }
    // }}).catch((err) => {
    //     toast.error('Login Failed :'+err.message);
    // })
  };
  return (
    <div className="container container-main">
      <form className="form-container" onSubmit={handleSubmit}>
        <div class="mb-3 container">
          <input
            value={email}
            type="text"
            placeholder="email address"
            class="form-control"
            onChange={(e) => emailChange(e.target.value)}
          />
        </div>
        <div class="mb-3 container">
          <input
            value={pass}
            type="password"
            placeholder="password"
            class="form-control"
            onChange={(e) => passChange(e.target.value)}
          />
        </div>
        <div className="mb-3 container">
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
