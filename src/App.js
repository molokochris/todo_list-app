import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contacts from "./pages/AddToDo";
import ErrorPage from "./pages/error-page";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/add",
    element: <Contacts />,
    errorElement: <ErrorPage />,
  },
]);

export default App;
