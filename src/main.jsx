import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home/Home";
import AuthProvider from "./AuthProvider/AuthProvider";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import AllToys from "./Components/Pages/AllToys/AllToys";
import ToyCard from "./Components/Pages/Home/ToyCard";
import ToyPage from "./Components/Pages/ToyPage/ToyPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <ToyPage></ToyPage>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:7000/toy/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
