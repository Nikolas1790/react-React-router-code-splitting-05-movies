import axios from 'axios';
import React, { useEffect, useState  } from 'react'
import { useParams} from 'react-router-dom'

export const Reviews = () => {
  const {movieId} = useParams()

  const [reviews, setReviews] = useState([])

  useEffect(() =>{
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=537b9a5585a30e006c200a33f280f965`)
    .then(response => {
      setReviews(response.data.results)
      console.log(response.data.results);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });

  },[movieId])

  return (
    <div>
     
            {reviews.length > 0 ? (reviews.map(({author, content, id}) => {
     
              return <li key={id}>
                 <h3>Autor: {author}</h3>
                 <p>{content}</p>
               </li>
            })) : (<p>We don't have any reviews for this movie. </p>)}
     
    </div>
  )
}
