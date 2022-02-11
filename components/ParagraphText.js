import React from 'react';
import styled from 'styled-components';


const ParagraphStyles = styled.p`
  font-size: 1.6rem;
  line-height: 1.4em;
  color:var(--black);
  @media only screen and (max-width: 1050px) {
    font-size: 1.4rem;
  }
`;
const ParagraphText = ({ children, ...rest }) => (
  <ParagraphStyles {...rest}>{children}</ParagraphStyles>
);

export default ParagraphText;
