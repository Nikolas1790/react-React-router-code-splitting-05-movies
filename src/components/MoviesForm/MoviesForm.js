import { useState } from "react"
import {  toast } from "react-toastify"; 
import { MoviesFormButton, MoviesFormInput, MoviesFormStyled } from "./MoviesForm.styled";

export const MoviesForm = ({onChange}) =>{
  const [movieTitle, setMovieTitle] = useState('')
   
  const handleSubmit = (e) =>{
    e.preventDefault() 
    if(!movieTitle.trim()){          
      return toast.error("Please, enter your query in the search bar :)");
    }
       
      onChange(movieTitle)
      setMovieTitle('')        
  }

  const updateQueryString = e => {
    if(e.target.value === ''){
      return setMovieTitle({})
    }
    setMovieTitle( e.target.value )  
        
  }
  return(     
    <MoviesFormStyled onSubmit={handleSubmit} >
      <MoviesFormInput      
        type="text"
        placeholder="Search films"
        value={movieTitle} 
        name='query'
        onChange={updateQueryString}
      />

      <MoviesFormButton type='submit' >
        <span >Search</span>
      </MoviesFormButton>           
     </MoviesFormStyled>
  )
}
