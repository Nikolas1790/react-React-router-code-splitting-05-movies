import { Link } from 'react-router-dom'

export const MoviesList = () =>{

    return(
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>        
      </ul> 
    )
}