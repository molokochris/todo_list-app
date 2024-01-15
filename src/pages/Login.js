import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const auth = getAuth();
    console.log(email, password);

    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Successful login
          const user = userCredential.user;
          console.log("User logged in:", user);
          // Handle successful login actions here
          navigate("/add");
        })
        .catch((error) => {
          // Handling Firebase errors
          const errorCode = error.code;
          const errorMessage = error.message;

          switch (errorCode) {
            case "auth/invalid-email":
              // Display "Invalid email address" message
              break;
            case "auth/user-disabled":
              // Display "User account disabled" message
              break;
            case "auth/wrong-password":
              // Display "Incorrect password" message
              break;
            // Handle other specific Firebase error codes as needed
            default:
              // Display generic error message for unexpected errors
              console.error("An error occurred:", error);
            // Handle unexpected errors gracefully
          }
        });
    } catch (error) {
      // Catching any errors outside of Firebase promise
      console.error("Unexpected error:", error);
      // Handle unexpected errors gracefully
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          placeholder="email"
          value={email}
          style={{ padding: "6px 10px", marginBottom: "10px" }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          value={password}
          style={{ padding: "6px 10px", marginBottom: "10px" }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          style={{ color: "tomato", fontSize: "12px", marginBottom: "10px" }}
          onClick={() => navigate("/Register")}
        >
          Register instead?
        </span>
        <button onClick={handleLogin}>login</button>
      </div>
    </div>
  );
}
