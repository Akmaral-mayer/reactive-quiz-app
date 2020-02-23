import React from 'react';
import MathCharacters from '../ui/MathCharacters/MathCharacters';
import NextButton from '../ui/NextButton/NextButton';
import PropTypes from 'prop-types';
import css from './IntroPage.module.css';

export default function IntroPage(props) {

  return (
    <section className={css.introPageWrap} style={{display: props.display ? 'block' : 'none'}}>
      <article className={css.introPageContent}>
        <MathCharacters />
        <p>{props.content}</p>
      </article>
      <NextButton buttonText={props.buttonText} onClick={props.onClick} />
    </section>
  );
}

IntroPage.propTypes = {
  content: PropTypes.string,
  buttonText: PropTypes.string,
}

