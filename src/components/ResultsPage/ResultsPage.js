import React from 'react';
import NextButton from '../ui/NextButton/NextButton';
import PropTypes from 'prop-types';
import css from './ResultsPage.module.css';

export default function ResultsPage(props) {
  function setResultComment(score) {
    let resultComment;
    if (score <= 3) {
      resultComment = "Ouch, try not to beat yourself up too much.";
      return resultComment;
    } else if (score >= 4 && score <= 7) {
      resultComment = "Not too bad, but room for improvement.";
      return resultComment;
    } else if (score >= 8 && score <= 9) {
      resultComment = "Pretty good! But not quite a perfect score.";
      return resultComment;
    } else {
      resultComment = "Perfect! Well done you. Perhaps you'll get harder questions next time.";
      return <NextButton buttonText={'Next Level'} onClick={() => props.onNextLevel()}/>
  }
}

return (
  <section className={css.resultsPageWrap} style={{ display: props.display ? 'block' : 'none' }}>
    <article className={css.resultsPageContent} >
      <p className={css.resultsPageTextSmall} >{props.content}</p>
      <h3 className={css.resultsPageTextLarge} >{props.score} out of {props.outOf}</h3>
      <p className={css.resultsPageTextSmall}>{setResultComment(props.score)}</p>
    </article>
    <NextButton buttonText={props.buttonText} onClick={() => props.onClick()} />
  </section>
);
}

ResultsPage.propTypes = {
  content: PropTypes.string,
  buttonText: PropTypes.string,
}

