import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Authors from "../pages/Authors";
import Author from "../pages/Author";
import Quotes from "../pages/Quotes";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/authors", element: <Authors /> },
  { path: "/quotes", element: <Quotes /> },
  { path: "/authors/:id", element: <Author />}
]);