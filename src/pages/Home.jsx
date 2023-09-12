// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {requestTopMovies} from '../services/API'

 const Home = () => {

  const [images, setImages] = useState(null)
  // const [loader, setLoader] = useState(false)

  // useEffect(() =>{
  // //   const d = requestTopMovies()
  // //  console.log(d)
  //   // axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=537b9a5585a30e006c200a33f280f965')
  //   requestTopMovies().then(response => {
  //     setImages(response.data.results)
  //     // console.log(response.data.results);
  //   })
  //   .catch(error => {
  //     console.error('Ошибка:', error);
  //   });
        
  // },[])



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await requestTopMovies();
        setImages(response.results);
      
      } catch (error) {
        console.error('Ошибка:', error);
      }
    };
  
    fetchData();
  }, []);

  
    

  return (
    <div>      
      <h1>Trending today</h1>
      {images?.map(({id, title}) => {
        
        return <li key={id}> <Link  to={`movies/${id}`}>{title}</Link></li>
      })  }
            
    </div>
        
  )
}


export default Home