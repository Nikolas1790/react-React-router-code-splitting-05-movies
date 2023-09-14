import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { HeaderNav } from './Header.styled';

export const Header = () => {
  const StyledLink = styled(NavLink)`
  color: black;
  padding: 10px;
  text-decoration: none;
  
  &.active {
    color: #007bff;
  }
`;
  return (              
      <HeaderNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to='/movies'>Movies</StyledLink>     
      </HeaderNav>   
  )
}
