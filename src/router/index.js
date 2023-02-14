import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Authors from "../pages/Authors";
import Author from "../pages/Author";
import Quotes from "../pages/Quotes";
import CreateQuote from "../pages/CreateQuote";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/authors", element: <Authors /> },
  { path: "/quotes", element: <Quotes /> },
  { path: "/authors/:id", element: <Author />},
  { path: "/quotes/new", element: <CreateQuote />}
]);