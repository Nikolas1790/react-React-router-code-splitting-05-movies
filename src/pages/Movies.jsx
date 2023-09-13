// import { Axios } from 'axios'
// import React, { useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { requesSearchMovies} from '../services/API'
import { useEffect, useState } from 'react';
// import { toast } from "react-toastify"; 
// import React, { useEffect } from 'react'
// import { toast } from "react-toastify"; 

 const Movies = () => { 
  const [query, setQuery] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();

  const film = searchParams.get('film')  ?? '';

const location = useLocation()
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await requesSearchMovies(film);     
      setQuery(response.results)      
    
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  fetchData();
}, [film]);




  const handleSubmit = (e) =>{
    e.preventDefault()    
    // if(!query.trim()){
    //    return toast.error("Please, enter your query in the search bar :)");
    // }
    const form = e.currentTarget;
    console.log(form)
    setSearchParams({film: form.elements.query });
    // setSearchParams('')


    // form.reset();    
    // onSubmit(query);
    // setQuery('')
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
                // value={query}
                // onChange={handleChange}
                value={film} 
                onChange={updateQueryString}
              />

              <button type='submit' >
                <span >Search</span>
              </button>
         </form>


         {query?.map(({id, title}) => {
       
        return <li key={id}> <Link  to={`${id}`} state={{form: location}}>{title}</Link></li>
      })  }


       </div>
  )
}



// e => setSearchParams({film: e.target.value })


export default Movies


// onClick={() => setSearchParams({c: 'hello'})}




