// import { Axios } from 'axios'
// import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
// import { toast } from "react-toastify"; 
// import React, { useEffect } from 'react'

 const Movies = () => {
  // const [query, setQuery] = useState('')

  const [searchParams, setSearchParams] = useSearchParams();

  const nameFilm = searchParams.get('film')

   console.log(nameFilm)


  //  console.log(searchParams.get('a'))
  //  console.log(searchParams.toString());
    // useEffect(() =>{
  //   HTTP запрос
  // },[])
  // const handleChange = ({target: {value}}) =>{
  //   setQuery(value) 
  // }

  // const handleSubmit = (e) =>{
  //   e.preventDefault()    
  //   if(!query.trim()){
  //      return toast.error("Please, enter your query in the search bar :)");
  //   }
  //   // onSubmit(query);
  //   setQuery('')

  }

  return (
       <div>   
         {/* <form onSubmit={handleSubmit} > */}

              <input      
                type="text"
                placeholder="Search films"
                // value={query}
                // onChange={handleChange}
                value={nameFilm}
                onChange={e => setSearchParams({film: e.target.value })}
              />

              <button onClick={() => setSearchParams({c: 'hello'})} >
                <span >Search</span>
              </button>
         {/* </form> */}

       </div>
  )
}


export default Movies