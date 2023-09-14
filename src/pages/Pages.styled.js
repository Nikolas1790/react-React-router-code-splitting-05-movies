import styled from 'styled-components'

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

export const HomeTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const HomeConteiner = styled.div`
padding: 0 20px;

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
 border-bottom: 1px solid #000;
 padding: 8px;
 box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
`
export const MoviesDetailsAdditionalInf = styled.div`
background-color: rgb(140, 170, 214);
 border-bottom: 1px solid #000;
 padding: 8px;
 box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
 margin-bottom: 20px;
`