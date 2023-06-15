import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

export default function Home() {
  return (
    <div className="container-main">
      {/* <nav className="head">
        <Link to="/">
          <img src="./logo.png" alt="" />
        </Link>
      </nav> */}
      <div className="inner">
        <div className="container-tab">
          <div className="account-tab">
            <Link className="login-tab" to="/login">
              Login
            </Link>
            <Link className="register-tab" to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
