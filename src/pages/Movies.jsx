import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { requesSearchMovies} from '../services/API'
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { toast } from "react-toastify"; 

 const Movies = () => { 
  const [query, setQuery] = useState([])
  const [movieTitle, setMovieTitle] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false)

  const film = searchParams.get('film')  ?? '';
  const location = useLocation()


useEffect(() => {

  setLoader(true);
  const fetchData = async () => {
    try {
      const response = await requesSearchMovies(movieTitle);     
      setQuery(response.results)      
    
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {

      setLoader(false);
    }
  };
  fetchData();
}, [movieTitle]);


const handleSubmit = (e) =>{
  e.preventDefault()   
  const form = e.currentTarget;
  if(!form.elements.query.value.trim()){
    toast.error("Please, enter your query in the search bar :)");
    return alert("Please, enter your query in the search bar :)");
  }
  
  console.log(form.elements.query.value.trim() )
  setSearchParams({film: form.elements.query.value.trim() });
setMovieTitle(form.elements.query.value.trim() )

  setSearchParams('')

}

  const updateQueryString = e => {
    if(e.target.value === ''){
      return setSearchParams({})
    }
    setSearchParams({film: e.target.value })  

  }

  return (
       <div>   
         <form onSubmit={handleSubmit} >
              <input      
                type="text"
                placeholder="Search films"
                value={film} 
                name='query'
                onChange={updateQueryString}
              />

              <button type='submit' >
                <span >Search</span>
              </button>
         </form>

         {loader && <Loader/>}


         {query?.map(({id, title}) => {
       
        return <li key={id}> <Link  to={`${id}`} state={{form: location}}>{title}</Link></li>
      })  }


       </div>
  )
}


export default Movies








// // import { Axios } from 'axios'
// // import React, { useState } from 'react'
// import { Link, useLocation, useSearchParams } from 'react-router-dom';
// import { requesSearchMovies} from '../services/API'
// import { useEffect, useState } from 'react';
// // import { toast } from "react-toastify"; 
// // import React, { useEffect } from 'react'
// // import { toast } from "react-toastify"; 

//  const Movies = () => { 
//   const [query, setQuery] = useState([])
//   const [searchParams, setSearchParams] = useSearchParams();

//   const film = searchParams.get('film')  ?? '';

// const location = useLocation()

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await requesSearchMovies(film);     
//       setQuery(response.results)      
    
//     } catch (error) {
//       console.error('Ошибка:', error);
//     }
//   };
//   fetchData();
// }, [film]);

// const visible =query.filter(find => {
//   console.log(find.title)
//  return find.title.includes(film)})
// console.log(visible)


//   const handleSubmit = (e) =>{
//     e.preventDefault()    
//     // if(!query.trim()){
//     //    return toast.error("Please, enter your query in the search bar :)");
//     // }
//     const form = e.currentTarget;
//     console.log(form.elements.query.value )
//     setSearchParams({film: form.elements.query.value });
//     // console.log(form.elements)
//     // setSearchParams('')


//     // form.reset();    
//     // onSubmit(query);
//     // setQuery('')
//   }

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
//                 // value={query}
//                 // onChange={handleChange}
//                 value={film} 
//                 name={query}
//                 onChange={updateQueryString}
//               />

//               <button type='submit' >
//                 <span >Search</span>
//               </button>
//          </form>


//          {query?.map(({id, title}) => {
       
//         return <li key={id}> <Link  to={`${id}`} state={{form: location}}>{title}</Link></li>
//       })  }


//        </div>
//   )
// }



// // e => setSearchParams({film: e.target.value })


// export default Movies


// // onClick={() => setSearchParams({c: 'hello'})}



