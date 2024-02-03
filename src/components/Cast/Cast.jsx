import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {requesCast} from '../../services/API'
import { Loader } from 'components/Loader/Loader';
import { CastStyled, CastStyledChatacter, CastStyledImg, CastStyledName } from './Cast.style';

const Cast = () => {
  const [cast, setCast] = useState(null)
  const [loader, setLoader] = useState(false)
  const {movieId} = useParams()

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const response = await  requesCast(movieId);
        setCast(response.cast)
    
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
        {cast?.map(({profile_path, name, id, character}) => {

          return <CastStyled key={id}>
              <CastStyledImg
                src={profile_path? `https://image.tmdb.org/t/p/w500${profile_path}` : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'}
                alt={name}
                 width={100}
              />
              <CastStyledName>{name}</CastStyledName>
              <CastStyledChatacter>character: {character}</CastStyledChatacter>
            </CastStyled>
       })  }
    </div>
  )
}
export default Cast