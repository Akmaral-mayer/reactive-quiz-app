import React from 'react';
import PropTypes from 'prop-types';
import css from './AnswerButton.module.css';


export default function AnswerButton(props) {
	return (
		<button className={css.btn} value={props.answer} onClick={props.onClick}>
			{props.answer}
		</button>
	);
}

AnswerButton.propTypes = {
	answer: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
}
