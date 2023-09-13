import React, { useEffect, useState  } from 'react'
import { useParams} from 'react-router-dom'
import {requesReviews} from '../../services/API'
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const {movieId} = useParams()

  const [reviews, setReviews] = useState([])
  const [loader, setLoader] = useState(false)


  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const response = await requesReviews(movieId);
        setReviews(response.results);
      
      } catch (error) {
        console.error('Ошибка:', error);
      } finally {

        setLoader(false);
      }
    };
  
    fetchData();
  }, [movieId]);

  return (
    <div>     
      {loader && <Loader/>}
            {reviews.length > 0 ? (reviews.map(({author, content, id}) => {
     
              return <li key={id}>
                 <h3>Autor: {author}</h3>
                 <p>{content}</p>
               </li>
            })) : (<p>We don't have any reviews for this movie. </p>)}
     
    </div>
  )
}
