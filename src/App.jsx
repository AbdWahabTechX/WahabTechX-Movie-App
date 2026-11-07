import { createBrowserRouter, RouterProvider } from "react-router";

import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { AppLayout } from "./Layout/UI/AppLayout";
import { ErrorPage } from "./Layout/UI/ErrorPage";

import { Getmoviedata } from "../../Api/GetApidata";

import { Movie } from "./Layout/UI/Movie";

export const App = () => {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children:[
        {
      path: "/home",
      element: <Home />
    },
    {
    path: "/movie",
    element: <Movie />,
    loader: Getmoviedata
},
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/about",
      element: <About />
    }
      ]
    },

    
  ]);

  return <RouterProvider router={router} />;
};