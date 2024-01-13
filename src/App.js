import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/root";
import Contacts from "./pages/AddToDo";
import ErrorPage from "./pages/error-page";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/add",
    element: <Contacts />,
  },
]);

export default App;
