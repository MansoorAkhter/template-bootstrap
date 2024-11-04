import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;



// TUTORIAL LINK
// https://www.youtube.com/watch?v=m0OMedQHBhc&t=35s