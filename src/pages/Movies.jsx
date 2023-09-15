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
      console.error('Ошибка:', error);
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


// import { Link, useLocation, useSearchParams } from 'react-router-dom';
// import { requesSearchMovies} from '../services/API'
// import { useEffect, useState } from 'react';
// import { Loader } from 'components/Loader/Loader';
// import { toast } from "react-toastify"; 

//  const Movies = () => { 
//   const [query, setQuery] = useState([])
//   const [movieTitle, setMovieTitle] = useState('')
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [loader, setLoader] = useState(false)

//   const film = searchParams.get('film')  ?? '';
//   const location = useLocation()


// useEffect(() => {

//   setLoader(true);
//   const fetchData = async () => {
//     try {
//       const response = await requesSearchMovies(movieTitle);     
//       setQuery(response.results)      
    
//     } catch (error) {
//       console.error('Ошибка:', error);
//     } finally {

//       setLoader(false);
//     }
//   };
//   fetchData();
// }, [movieTitle]);


// const handleSubmit = (e) =>{
//   e.preventDefault()   
//   const form = e.currentTarget;
//   if(!form.elements.query.value.trim()){
//     toast.error("Please, enter your query in the search bar :)");
//     return alert("Please, enter your query in the search bar :)");
//   }

//   setSearchParams({film: form.elements.query.value.trim() });
// setMovieTitle(form.elements.query.value.trim() )

//   setSearchParams('')
// }

//   const updateQueryString = e => {
//     if(e.target.value === ''){
//       return setSearchParams({})
//     }
//     setSearchParams({film: e.target.value })  

//   }

//   return (
//        <div>   
//          <form onSubmit={handleSubmit} >
//               <input      
//                 type="text"
//                 placeholder="Search films"
//                 value={film} 
//                 name='query'
//                 onChange={updateQueryString}
//               />

//               <button type='submit' >
//                 <span >Search</span>
//               </button>
//          </form>

//          {loader && <Loader/>}

//          {query?.map(({id, title}) => {
       
//         return <li key={id}> <Link  to={`${id}`} state={{form: location}}>{title}</Link></li>
//       })  }


//        </div>
//   )
// }

// export default Movies
