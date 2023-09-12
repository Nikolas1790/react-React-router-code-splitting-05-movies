import { Axios } from 'axios'
import React, { useState } from 'react'
import { toast } from "react-toastify"; 
// import React, { useEffect } from 'react'
 const Movies = () => {
  const [query, setQuery] = useState('')
  
    // useEffect(() =>{
  //   HTTP запрос
  // },[])
  const handleChange = ({target: {value}}) =>{
    setQuery(value) 
  }

  const handleSubmit = (e) =>{
    e.preventDefault()    
    if(!query.trim()){
       return toast.error("Please, enter your query in the search bar :)");
    }
    // onSubmit(query);
    setQuery('')

  }

  return (
    <div>   
   <form onSubmit={handleSubmit} >

    <input      
      type="text"
      placeholder="Search images and photos"
      value={query}
      onChange={handleChange}
    />

    <button type="submit" >
      <span >Search</span>
    </button>
  </form>
    
</div>
  )
}


export default Movies