import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuestionWrap = styled.p`
  font-size: 1.5rem;
  font-family: 'Lora', serif;
  margin: 2rem 1rem 0;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 2rem;
  }

  @media (min-width: 900px) {
    font-size: 3rem;
  }

  span {
  	background: rgba(0,0,0,0.05);
  	padding: 3px 5px;
  }
`;

export default function Question(props)  {
	return (
		<QuestionWrap>
			{props.questionText} <span>{props.valueA} {props.operator} {props.valueB}</span>?
		</QuestionWrap>
	);
}

Question.propTypes = {
  answer: PropTypes.number,
}
