// import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { Login, Register } from "./Auth";

export default function Root() {
  const [isVal, setIsVal] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {isVal ? <Register setIsVal={setIsVal} /> : <Login setIsVal={setIsVal} />}
    </div>
  );
}

function Login(props) {
  console.log(props);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        flexDirection: "column",
      }}
    >
      <input
        placeholder="email"
        style={{ padding: "6px 10px", marginBottom: "10px" }}
      />
      <input
        placeholder="password"
        style={{ padding: "6px 10px", marginBottom: "10px" }}
      />
      <span
        style={{ color: "tomato", fontSize: "12px", marginBottom: "10px" }}
        onClick={() => props.setIsVal(true)}
      >
        Register instead?
      </span>
      <button>login</button>
    </div>
  );
}
function Register() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItem: "center" }}
    >
      <input placeholder="email" />
      <input placeholder="password" />
      <button>register</button>
    </div>
  );
}
