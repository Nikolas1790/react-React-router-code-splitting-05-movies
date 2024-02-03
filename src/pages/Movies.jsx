import {  useLocation, useSearchParams } from 'react-router-dom';
import { requesSearchMovies} from '../services/API'
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MoviesForm } from 'components/MoviesForm/MoviesForm';
import { MoviesConteiner, MoviesSearchConteiner, TextDecorationLink } from './Pages.styled';

const Movies = () => { 
  const [query, setQuery] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false)

  const film = searchParams.get('film')  ?? '';
  const location = useLocation()

useEffect(() => {
  setLoader(true);
  const fetchData = async () => {
    try {
      const response = await requesSearchMovies(film);     
      setQuery(response.results)      
    
    } catch (error) {
      console.error('Error:', error);
    } finally {

      setLoader(false);
    }
  };
  fetchData();
}, [film]);

  const updateQueryString = (film) => {
    if(film === ''){
      return setSearchParams({})
    }
       setSearchParams({film: film }) 
  }

  return (
    <MoviesConteiner>   
      <MoviesSearchConteiner>
        <MoviesForm onChange={updateQueryString}></MoviesForm>
      </MoviesSearchConteiner>

      {loader && <Loader/>}
      {query?.map(({id, title}) => {       
        return <li key={id}> <TextDecorationLink style={{ textDecoration: 'none' }} to={`${id}`} state={{form: location}}>{title}</TextDecorationLink></li>
      })  }
    </MoviesConteiner>
  )
}

export default Movies
