import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    console.log(email, password);
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Successful login
          const user = userCredential.user;
          console.log("User logged in:", user);
          // Handle successful login actions here, such as:
          // - Redirecting to a protected route
          // - Storing user data in local storage/state
          // - Displaying a success message
          navigate("/");
        })
        .catch((error) => {
          // Handle Firebase errors
          const errorCode = error.code;
          const errorMessage = error.message;

          switch (errorCode) {
            case "auth/email-already-in-use":
              // Display "Email already in use" message
              break;
            case "auth/invalid-email":
              // Display "Invalid email address" message
              break;
            case "auth/weak-password":
              // Display "Password is too weak" message
              break;
            // Handle other specific Firebase error codes as needed
            default:
              // Display generic error message for unexpected errors
              console.error("An error occurred:", error);
            // Handle unexpected errors gracefully
          }
        });
    } catch (error) {
      // Catch any errors outside of Firebase promise
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
          onClick={() => navigate("/")}
        >
          Login instead?
        </span>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}
