import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

 const MovieDetails = () => {
  // const params = useParams()
  const {movieId} = useParams()
 
  console.log(movieId)

  return (
    <div>
      MovieDetails
      
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
