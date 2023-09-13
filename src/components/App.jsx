import { Route, Routes } from "react-router-dom";

import  Home  from "../pages/Home";
import  Movies from "../pages/Movies";
import { Lauout } from "./Layout/Lauout";
import  MovieDetails  from "../pages/MovieDetails";
import  Cast  from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

export const App = () => {
  return (
         <Routes>
        <Route path="/" element={<Lauout/>}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />

            <Route path='movies/:movieId' element={<MovieDetails />}>
              <Route path='cast' element={<Cast />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
        </Route>
      </Routes>       
  );
};


