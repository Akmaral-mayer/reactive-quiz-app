import React from 'react';
import styled from 'styled-components';

const MathCharactersStyle = styled.h2`
  display: inline-block;
  background: rgba(0,0,0,0.05);
  font-size: 1.9rem;
  padding: 5px 10px;
  margin: 0;
`;

export default function MathCharacters()  {
  return <MathCharactersStyle>+ - * /</MathCharactersStyle>;
}