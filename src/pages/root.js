import { useNavigate } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();
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
      <div
        style={{
          padding: "10px 20px",
          marginBottom: "10px",
          width: "80px",
          backgroundColor: "tomato",
          color: "whitesmoke",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => navigate("/add")}
      >
        Add
      </div>
      <div
        style={{
          padding: "10px 20px",
          marginBottom: "10px",
          width: "80px",
          backgroundColor: "tomato",
          color: "whitesmoke",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        View
      </div>
    </div>
  );
}
