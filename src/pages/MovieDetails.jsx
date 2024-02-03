import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import {requesMovieDetails} from '../services/API'
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react'
import { MoviesList } from 'components/MoviesList/MoviesList'
import {  MoviesDetailsConteiner, MoviesDetailsContext,  MoviesDetailsImg, MoviesDetailsAdditionalInf, MoviesDetWraperContextFilm, MoviesDetTitle, MoviesDetScore, MoviesDetTitleSubsection, MoviesDetTextOverview,  MoviesDetailsLinkGoBack } from 'pages/Pages.styled'

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
        console.error('Error:', error);
      } finally {

        setLoader(false);
      }
    };
  
    fetchData();
  }, [movieId]);
 

  return (
    <MoviesDetailsConteiner>
      <MoviesDetailsLinkGoBack  to={backLinkLocationRef.current} >Go Back</MoviesDetailsLinkGoBack>
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
          <MoviesDetWraperContextFilm>
            <MoviesDetTitle> {query.title}</MoviesDetTitle>
            <MoviesDetScore>Use Score: {Math.round(query.vote_average * 10)}%</MoviesDetScore>
            <MoviesDetTitleSubsection>Overview</MoviesDetTitleSubsection>
            <MoviesDetTextOverview> {query.overview}</MoviesDetTextOverview>
            <MoviesDetTitleSubsection>Genres</MoviesDetTitleSubsection>
            <MoviesDetTextOverview>{query.genres.map(genre => genre.name).join(', ')}</MoviesDetTextOverview>
          </MoviesDetWraperContextFilm>
      </MoviesDetailsContext>
      )}
      <MoviesDetailsAdditionalInf>
        <MoviesDetTitle>Additional information</MoviesDetTitle>
        <MoviesList></MoviesList>
      </MoviesDetailsAdditionalInf>    
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MoviesDetailsConteiner>
  )
}

export default MovieDetails
