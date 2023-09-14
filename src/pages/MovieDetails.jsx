import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import {requesMovieDetails} from '../services/API'
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react'
import { MoviesList } from 'components/MoviesList/MoviesList'
import {  MoviesDetailsConteiner, MoviesDetailsContext,  MoviesDetailsImg, MoviesDetailsAdditionalInf } from 'pages/Pages.styled'

 const MovieDetails = () => {
  const {movieId} = useParams()   

  const [query, setQuery] = useState(null)
  const [loader, setLoader] = useState(false)
  const location = useLocation()
  const backLinkLocationRef = useRef(location.state?.form ?? '/movies' )


  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const response = await requesMovieDetails(movieId);
        setQuery(response);
      
      } catch (error) {
        console.error('Ошибка:', error);
      } finally {

        setLoader(false);
      }
    };
  
    fetchData();
  }, [movieId]);
 

  return (
    <MoviesDetailsConteiner>
            <Link  to={backLinkLocationRef.current} style={{ 
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer'
}}>Go Back</Link>
            {loader && <Loader/>}
            {query && (
            <MoviesDetailsContext>
               {query.poster_path && (
                    <MoviesDetailsImg
                      src={`https://image.tmdb.org/t/p/w500${query.poster_path}`}
                      alt={query.title}
                      width={250}
                    />
                 )}
                 <div>
                  <h2> {query.title}</h2>
                  <p>Use Score: {Math.round(query.vote_average * 10)}%</p>
                  <h3>Overview</h3>
                  <p> {query.overview}</p>
                  <h3>Genres</h3>
                <p>{query.genres.map(genre => genre.name).join(', ')}</p>
                </div>
      </MoviesDetailsContext>
      )}
      <MoviesDetailsAdditionalInf>
          <h2>Additional information</h2>
          <MoviesList></MoviesList>
      </MoviesDetailsAdditionalInf>    
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      </MoviesDetailsConteiner>
  )
}

export default MovieDetails





// import React, { useEffect, useRef, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { Link, useLocation } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'
// import {requesMovieDetails} from '../services/API'
// import { Loader } from 'components/Loader/Loader';
// import { Suspense } from 'react'

//  const MovieDetails = () => {
//   const {movieId} = useParams()   

//   const [query, setQuery] = useState(null)
//   const [loader, setLoader] = useState(false)
//   const location = useLocation()
//   const backLinkLocationRef = useRef(location.state?.form ?? '/movies')


//   useEffect(() => {
//     setLoader(true);
//     const fetchData = async () => {
//       try {
//         const response = await requesMovieDetails(movieId);
//         setQuery(response);
      
//       } catch (error) {
//         console.error('Ошибка:', error);
//       } finally {

//         setLoader(false);
//       }
//     };
  
//     fetchData();
//   }, [movieId]);
 

//   return (
//     <div>
//             <Link to={backLinkLocationRef.current}>Go Back</Link>
//             {loader && <Loader/>}
//             {query && (
//             <div>
//                {query.poster_path && (
//                     <img
//                       src={`https://image.tmdb.org/t/p/w500${query.poster_path}`}
//                       alt={query.title}
//                       width={250}
//                     />
//                  )}
//                   <h2> {query.title}</h2>
//                   <p>Use Score: {Math.round(query.vote_average * 10)}%</p>
//                   <h3>Overview</h3>
//                   <p> {query.overview}</p>
//                   <h3>Genres</h3>
//                 <p>{query.genres.map(genre => genre.name).join(', ')}</p>
                 
//       </div>
//       )}

//       <h2>Additional information</h2>
//       <ul>
//         <li>
//           <Link to="cast">Cast</Link>
//         </li>
//         <li>
//           <Link to="reviews">Reviews</Link>
//         </li>        
//       </ul>     
      
//       <Suspense fallback={<div>Loading...</div>}>
//         <Outlet />
//       </Suspense>
//       </div>
//   )
// }

// export default MovieDetails
