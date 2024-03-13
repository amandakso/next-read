import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import Home from "./routes/home";
import About from "./routes/about";
import Prompts from "./routes/prompts";
import ErrorPage from "./error-page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "home", element: <Home /> },
        {
          path: "about",
          element: <About />,
        },
        { path: "prompts", element: <Prompts /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
