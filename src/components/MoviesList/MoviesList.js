import { MoviesListLink } from './MoviesList.style'

export const MoviesList = () =>{

    return(
      <ol>
        <li>
          <MoviesListLink  to="cast">Cast</MoviesListLink>
        </li>
        <li>
          <MoviesListLink  to="reviews">Reviews</MoviesListLink>
        </li>        
      </ol> 
    )
}