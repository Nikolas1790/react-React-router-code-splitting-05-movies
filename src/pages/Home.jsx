import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {requestTopMovies} from '../services/API'
import { Loader } from 'components/Loader/Loader';
 const Home = () => {

  const [images, setImages] = useState(null)
  const [loader, setLoader] = useState(false)


  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const response = await requestTopMovies();
        setImages(response.results);
      
      } catch (error) {
        console.error('Ошибка:', error);
      } finally {

        setLoader(false);
      }
    };
  
    fetchData();
  }, []);

  
    

  return (
    <div>      
      <h1>Trending today</h1>
      {loader && <Loader/>}
      {images?.map(({id, title}) => {
        
        return <li key={id}> <Link  to={`movies/${id}`}>{title}</Link></li>
      })  }
            
    </div>
        
  )
}


export default Home