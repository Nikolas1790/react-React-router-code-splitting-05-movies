import { useState } from "react"

export const MoviesForm = () =>{
    const [movieTitle, setMovieTitle] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()   
        const form = e.currentTarget;
        if(!form.elements.query.value.trim()){
          toast.error("Please, enter your query in the search bar :)");
          return alert("Please, enter your query in the search bar :)");
        }
        // setSearchParams({film: form.elements.query.value.trim() });
        setMovieTitle(form.elements.query.value.trim() )
        setMovieTitle('')
        //   setSearchParams('')
        }

        const updateQueryString = e => {
            if(e.target.value === ''){
              return setMovieTitle({})
            }
            setMovieTitle({film: e.target.value })  
        
          }
    return(
        <form onSubmit={handleSubmit} >
        <input      
          type="text"
          placeholder="Search films"
          value={movieTitle} 
          name='query'
          onChange={updateQueryString}
        />

        <button type='submit' >
          <span >Search</span>
        </button>
   </form>
    )
}