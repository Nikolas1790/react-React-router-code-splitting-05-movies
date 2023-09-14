
import styled from 'styled-components'

export const MoviesFormStyled = styled.form`
display: flex;
gap: 10px;

`

export const MoviesFormInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

`

export const MoviesFormButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  border: 1.5px solid rgb(171, 163, 163);
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

    transition: background-color 250ms linear, box-shadow 250ms linear ;
    &:hover {
    background-color: blue;
    
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
    }
`


// export const MoviesDetailsConteiner = styled.div`  
//   padding: 8px 16px;  
  
// `

// export const MoviesDetailsButton = styled.button`
//   background-color: #007bff;  
//   color: #fff;
//   padding: 8px 16px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
  
//   box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
//     0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

//     transition: background-color 250ms linear, box-shadow 250ms linear ;
//     &:hover {
//     background-color: blue;
    
//     box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
//     }
// `
// export const MoviesDetailsImg = styled.img`
// border-radius:8px;
// box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
// `

// export const MoviesDetailsContext = styled.div`
//  display: flex;
//  gap:8px;
//  margin-top: 8px;
// `