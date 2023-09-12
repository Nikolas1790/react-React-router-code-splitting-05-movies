// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {requesCast} from '../../services/API'

export const Cast = () => {
  const [cast, setCast] = useState(null)
const {movieId} = useParams()

// useEffect(() =>{
//   requesCast(movieId)
//   // axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=537b9a5585a30e006c200a33f280f965`)
//   .then(response => {
//     setCast(response.cast)
//     console.log(response.cast);
//   })
//   .catch(error => {
//     console.error('Ошибка:', error);
//   });

// },[movieId])


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await  requesCast(movieId);
      setCast(response.cast)
    
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  fetchData();
}, [movieId]);

  return (
    <div>
                  {cast?.map(({profile_path, name, id, character}) => {
     
     return <li key={id}>
                    <img
                      src={profile_path? `https://image.tmdb.org/t/p/w500${profile_path}` : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'}
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
