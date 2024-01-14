// import { useNavigate } from "react-router-dom";
import { Login, Register } from "./Auth";

export default function Root() {
  // const navigate = useNavigate();
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
      <Login />
      <Register />
    </div>
  );
}
