import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const MoviesListLink = styled(Link)`
text-decoration: none; 
color: gray;     
    text-decoration: none;
    font-weight: bold;
    transition: color 250ms linear ;    
    &:hover {
        color: black;         
    }

`