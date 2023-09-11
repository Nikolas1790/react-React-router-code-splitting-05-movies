import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

 const Home = () => {

  const [images, setImages] = useState(null)
  // const [loader, setLoader] = useState(false)

  useEffect(() =>{
    axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=537b9a5585a30e006c200a33f280f965')
    .then(response => {
      setImages(response.data.results)
      // console.log(response.data.results);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
        
  },[])

  return (
    <div>      
      <h1>Trending today</h1>
      {images?.map(({id, title}) => {
        // console.log(id);
      
        return <li key={id}> <Link  to={`movies/${id}`}>{title}</Link></li>
      })  }
            
        </div>
        
  )
}


export default Home