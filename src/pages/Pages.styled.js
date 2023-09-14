import styled from 'styled-components'
// import { Link } from 'react-router-dom';
export const MoviesSearchConteiner = styled.div`

display: flex;
align-items: center;
justify-content: center;
list-style: none;
margin-bottom: 40px;

`
export const MoviesConteiner = styled.div`
padding: 20px;


`

export const HomeTitleWraper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const HomeConteiner = styled.div`
padding: 0 20px;

`
export const HomeTitle = styled.h1`
font-size:28px;
  color: #333;
  margin-bottom: 10px;
`

export const MoviesDetailsConteiner = styled.div`  
  padding: 8px 16px;  
  
  
`

export const MoviesDetailsButton = styled.button`
  background-color: #007bff;  
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

    transition: background-color 250ms linear, box-shadow 250ms linear ;
    &:hover {
    background-color: blue;
    
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
    }
`
export const MoviesDetailsImg = styled.img`
border-radius:8px;
box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
`

export const MoviesDetailsContext = styled.div`
 display: flex;
 gap:8px;
 margin-top: 8px;
 margin-bottom: 16px;
 border-bottom: 1px solid gray;
 padding: 8px;
 box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
 border-radius: 4px;
`
export const MoviesDetailsAdditionalInf = styled.div`
background-color: rgb(240, 240, 240);;
 border-bottom: 1px solid gray;
 padding: 8px;
 box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
 margin-bottom: 20px;
 border-radius: 4px;
`

// export const MoviesDetailsLinkGoBack = styled(Link)`
//   display: 'inline-block';
//   padding: '10px 20px';
//   background-color: 'blue';
//   color: 'white';
//   text-decoration: 'none';
//   border-radius: '5px';
//   font-size: 16px;
//   cursor: 'pointer'
 
// `

export const MoviesDetWraperContextFilm = styled.div`
  /* text-align: center; */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 background-color: #f4f4f4;
`

export const MoviesDetTitle = styled.h2`
font-size:24px;
  color: #333;
  margin-bottom: 10px;
`
export const MoviesDetTitleSubsection = styled.h3`
  font-size: 20px;
  color: #333;
  margin-top: 20px;
  margin-bottom: 10px;
`

export const MoviesDetTextOverview = styled.p`
  font-size: 16px;
  color: #666;
`

export const MoviesDetListGenres = styled.h2`
  font-size: 18px;
  color: #555;
`

export const MoviesDetScore = styled.h2`
  font-size: 18px;
  color: #555;
`
