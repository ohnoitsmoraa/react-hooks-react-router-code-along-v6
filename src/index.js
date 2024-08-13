import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./components/About";
// import Login from "./components/Login";
// import UserProfile from "./pages/UserProfile";
// import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);