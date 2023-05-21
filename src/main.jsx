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
import ToyPage from "./Components/Pages/ToyPage/ToyPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Blogs from "./Components/Pages/Blogs/Blogs";
import AddToy from "./Components/Pages/AddToy/AddToy";
import MyToys from "./Components/Pages/MyToys/MyToys";
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
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <ToyPage></ToyPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://cloud-palace-server.vercel.app/toy/${params.id}`),
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
