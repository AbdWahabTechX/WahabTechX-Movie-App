
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./HomePage";
import { About } from "./About";
import { Contact } from "./Contact";
import { AppLayout } from "./Layout/UI/AppLayout";
import { ErrorPage } from "./Layout/UI/ErrorPage";

import { Getmoviedata } from "../../Api/GetApidata";
import { GetmovieDetails } from "../../Api/GetMovieDetails";

import { Movie } from "./Layout/UI/Movie";
import { MovieDetails } from "./MovieDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index:true,
        element: <Home />
      },
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
        path: "movie/:movieID",
        element: <MovieDetails />,
        loader: GetmovieDetails
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
  }
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
