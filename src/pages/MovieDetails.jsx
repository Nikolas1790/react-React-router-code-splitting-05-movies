// import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import {requesMovieDetails} from '../services/API'

 const MovieDetails = () => {
  const {movieId} = useParams()   
  // console.log(movieId)

  const [query, setQuery] = useState(null)
  const location = useLocation()
  const backLinkLocationRef = useRef(location.state?.form ?? '/movies')
  // useEffect(() =>{
  //   requesMovieDetails(movieId)
  //   // axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=537b9a5585a30e006c200a33f280f965`)
  //   .then(response => {
  //     setQuery(response)
  //     console.log(response);
  //   })
  //   .catch(error => {
  //     console.error('Ошибка:', error);
  //   });

  // },[movieId])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await requesMovieDetails(movieId);
        setQuery(response);
      
      } catch (error) {
        console.error('Ошибка:', error);
      }
    };
  
    fetchData();
  }, [movieId]);
 

  return (
    <div>
            <Link to={backLinkLocationRef.current}>Go Back</Link>

            {query && (
            <div>
               {query.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${query.poster_path}`}
                      alt={query.title}
                      width={250}
                    />
                 )}
                  <h2> {query.title}</h2>
                  <p>Use Score: {Math.round(query.vote_average * 10)}%</p>
                  <h3>Overview</h3>
                  <p> {query.overview}</p>
                  <h3>Genres</h3>
                <p>{query.genres.map(genre => genre.name).join(', ')}</p>
                 
      </div>
      )}
            
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
        
      </ul>     
      
      <Outlet/>
      </div>
  )
}

export default MovieDetails
{/* <h3>Title: {query.title}</h3>
<p>Overview: {query.overview}</p>

{query.poster_path && (
  <img
    src={`https://image.tmdb.org/t/p/w500${query.poster_path}`}
    alt={query.title}
  />
)} */}