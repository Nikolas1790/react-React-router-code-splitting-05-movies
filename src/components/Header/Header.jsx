import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

export const Header = () => {
  const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
  return (              
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to='/movies'>Movies</StyledLink>     
      </nav>   
  )
}
