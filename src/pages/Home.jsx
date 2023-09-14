import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import {requestTopMovies} from '../services/API'
import { Loader } from 'components/Loader/Loader';
import { HomeConteiner, HomeTitle, HomeTitleWraper } from './Pages.styled';

 const Home = () => {

  const [images, setImages] = useState(null)
  const [loader, setLoader] = useState(false)
  const location = useLocation()

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
    <HomeConteiner>     
       <HomeTitleWraper>
      <HomeTitle>Trending today</HomeTitle>
      </HomeTitleWraper>
      {loader && <Loader/>}
      {images?.map(({id, title}) => {
        
        return <li key={id}> <Link style={{ textDecoration: 'none' }} to={`movies/${id}`} state={{form: location}}>{title}</Link></li>
      })  }
            
    </HomeConteiner>
        
  )
}


export default Home