import { Link } from 'react-router-dom'

export const MoviesList = () =>{

    return(
      <ol>
        <li>
          <Link style={{ textDecoration: 'none' }} to="cast">Cast</Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none' }} to="reviews">Reviews</Link>
        </li>        
      </ol> 
    )
}