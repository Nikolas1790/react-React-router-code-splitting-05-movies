import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { Lauout } from "./Layout/Lauout";
import { MovieDetails } from "./pages/MovieDetails";

export const App = () => {
  return (
    <div>


      
      <Routes>
        <Route path="/" element={<Lauout/>}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />

            <Route path='/movies/:movieId' element={<MovieDetails />} />


            <Route path="*" element={<Home />} />
        </Route>
      </Routes>   
    </div>
  );
};


// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101'
// }}