import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Cast = () => {
  const [cast, setCast] = useState(null)
const {movieId} = useParams()

useEffect(() =>{
  axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=537b9a5585a30e006c200a33f280f965`)
  .then(response => {
    setCast(response.data.cast)
    console.log(response.data.cast);
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });

},[movieId])


  return (
    <div>
                  {cast?.map(({profile_path, name, id, character}) => {
     
     return <li key={id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                      alt={name}
                      width={100}
                    />
                    <p>{name}</p>
                    <p>character: {character}</p>
             </li>
   })  }
      </div>
  )
}
