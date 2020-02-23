import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TimerWrap = styled.section`
  font-size: 1rem;
  left: 50%;
  margin: 3rem 0 0;
  position: absolute;
  text-align: center;
  transform: translate(-50%);
  width: 150px;

  @media (min-width: 600px) {
    margin: 4rem 0 0;
  }

  &::before,
  &::after {
    background: #333;
    border-radius: 5px;
    content: '';
    height: 5px;
    left: 50%;
    opacity: 0;
    position: absolute;
    transform: translateX(-50%);
    transition: opacity 0.3s ease-out, width 0.3s ease-out;
    width: 120px;
  }

  &::after {
    background: rgba(0,0,0,0.075);
    opacity: 1;
    width: 120px;
  }

  &.countdown-started::before {
    opacity: 1;
    transition: width 9.95s linear, left 9.95s linear, opacity 0.3s linear;
    width: 0;
  }
`;


export default function Timer(props) {

  return (
    <TimerWrap className={props.displayProp ? 'countdown-started' : ''} />
  );
}

Timer.propTypes = {
  content: PropTypes.string,
  buttonText: PropTypes.string,
}

