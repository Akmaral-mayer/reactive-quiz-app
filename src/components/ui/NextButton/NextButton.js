import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  background: transparent;
  border: 0;
  color: #FFE45A;
  font-size: 1.25em;
  margin: 2rem 1rem 0;
  padding: 1rem 1rem;
  text-align: center;
  text-transform: uppercase;
  position: relative;

  span {
    font-family: 'Lora', serif;
    position: relative;
    z-index: 2;
  }

  &::after {
    background: #444;
    content: "";
    transform: skew(-10deg) rotate(-2deg);
    transition: transform 0.2s ease-out;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  &:hover,
  &:focus {
    
    cursor: pointer;
    outline: 0;

    &::after {
      background: #333;
      transform: skew(10deg) rotate(2deg);
    }
  }

  &:active::after {
    background: #333;
  }
`;

export default function NextButton(props)  {
	return (
		<Button onClick={props.onClick}>
			<span>{props.buttonText}</span>
		</Button>
	);
}

NextButton.propTypes = {
  answer: PropTypes.string,
}
