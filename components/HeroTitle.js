import React from 'react';
import styled from 'styled-components';


const TitleStyle = styled.h1`
  font-size: 6rem;
  color: var(--black);
  font-weight: 900;
  text-transform: capitalize;
  @media only screen and (max-width: 1050px) {
    font-size: 4rem;
  }
`;
const HeroTitle = ({ children, ...rest }) => (
  <TitleStyle {...rest}>{children}</TitleStyle>
);

export default HeroTitle;
