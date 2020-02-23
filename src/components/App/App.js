import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import IntroPage from '../IntroPage/IntroPage';
import Question from '../ui/Question/Question';
import AnswerButton from '../ui/AnswerButton/AnswerButton';
import Timer from '../Timer/Timer';
import ResultsPage from '../ResultsPage/ResultsPage';
import css from './App.module.css';

const duration = 400;

// Fade handler
const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={duration}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

class App extends Component {

  // State constructor
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showIntro: true,
      showQuiz: false,
      showResults: false,
      siteTitle: 'Math Quiz',
      pageText: 'This site will generate random math questions. It has 3 levels and gives you a limited time to answer them.',
      pageButtonText: 'Start',
      currentPage: 0,
      questionsTotal: 10,
      questionText: 'What is...',
      questionOperatorArray: ['+', '-', '*', '/'],
      questionValueA: 0,
      questionOperator: '',
      questionValueB: 0,
      questionValueMin: 3,
      questionValueMax: 12,
      questionTimeOut: 10000,
      countTransition: false,
      timerText: 'Time left until next question...',
      timerCurrent: 10,
      timerRemaining: 10,
      correctAnswer: 1,
      answer1: 1,
      answer2: 2,
      answer3: 3,
      answerScore: 0,
      totalTimeToDeduct: 0,
      questionTimer: 0,
    }

    this.jumpTo = this.jumpTo.bind(this);
    this.reset = this.reset.bind(this);
    this.onNextLevel = this.onNextLevel.bind(this);
  }

  // React Lifecycle - triggered before first page render
  componentWillMount() {

    this.generateQuestionValues();

    // Transition In (first page load)
    setTimeout(() => {
      this.setState({
        show: !this.state.show,
      });
    }, duration);
  }

  // Clean up
  componentWillUnmount() {
    clearInterval(this.state.questionTimer);
  }

  // Knuth shuffle array
  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // Check for duplicate value in initial answers and nudge
  checkForDuplicates(val1, val2) {
    if (val1 !== val2) {
      return val2;
    } else {
      return val2 + 1;
    }
  }

  // Check for duplicate answers in answers Array
  checkForDuplicatesInArray(answersArr) {
    let ans1 = answersArr[0];
    let ans2 = answersArr[1];
    let ans3 = answersArr[2];

    if (ans2 === ans1) {
      answersArr[1] = parseInt((ans1 + 1), 10);
    }
    if (ans3 === ans2 || ans3 === ans1) {
      answersArr[2] = parseInt((ans2 + 2), 10);
    }

    console.log(`After checkForDuplicates: ${answersArr} | Type of a: ${typeof (answersArr[1])} - Type of b: ${typeof (answersArr[2])}`);
  };

  generateQuestionValues(event) {
    let minQuestionVal = this.state.questionValueMin;
    let maxQuestionVal = this.state.questionValueMax;
    let operatorsArray = this.state.questionOperatorArray;
    const getRandomInt = (minVal, maxVal) => Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    const getRandomOperator = (array) => array[Math.floor(Math.random() * array.length)];
    let valueA = getRandomInt(minQuestionVal, maxQuestionVal);
    let valueB = this.checkForDuplicates(valueA, getRandomInt(minQuestionVal, maxQuestionVal));
    let operator = getRandomOperator(operatorsArray);

    // Set those values
    this.setState({
      questionValueA: valueA,
      questionOperator: operator,
      questionValueB: valueB,
    }, () => {
      this.generateAnswerValues(event);
    });
  }

  generateAnswerValues(event) {
    const getRandomInt = (minVal, maxVal) => Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    let valueA = this.state.questionValueA;
    let operator = this.state.questionOperator;
    let valueB = this.state.questionValueB;
    let minVal = 1;
    let maxVal = 5;
    let answersArray = [];
    // Required because the operator is currently a string
    let operatorFunctions = {
      '+': (a, b) => (a + b),
      '-': (a, b) => (a - b),
      '/': (a, b) => (a / b),
      '*': (a, b) => (a * b),
    };

    // Answer is correct, but generate other values close to it...
    let answer1raw = operatorFunctions[operator](valueA, valueB);
    // If answer1raw produces a decimal...
    if (answer1raw % 1 !== 0) {
      answer1raw = Number.parseFloat(answer1raw).toFixed(1);
    }
    let answer1 = answer1raw;
    let answer2 = operatorFunctions[operator](answer1, getRandomInt(minVal, maxVal));
    let answer3 = operatorFunctions[operator](answer1, getRandomInt(minVal, maxVal));

    // Push the answers to an array so we can shuffle
    answersArray.push(answer1, answer2, answer3);

    // console.log(`Before decimal check: ${answersArray}`);
    //check if any of the answers have decimal points
    answersArray.forEach((answer, index) => {
      // Check if the number is decimal
      if (answer % 1 !== 0) {
        let decimalTidyAnswer = Number.parseFloat(answer).toFixed(1);
        // splice[remove, how many to remove, replace with]
        answersArray.splice(index, 1, decimalTidyAnswer);
      }
    });
    // console.log(`After decimal check: ${answersArray}`); 

    // Check for duplicates and nudge them
    this.checkForDuplicatesInArray(answersArray);

    // Shuffle that array
    this.shuffleArray(answersArray);

    // Set those values
    this.setState({
      correctAnswer: Number(answer1),
      answer1: answersArray[0],
      answer2: answersArray[1],
      answer3: answersArray[2],
    }, () => {
      console.log(`Correct: ${this.state.correctAnswer} | AnswerA: ${answersArray[0]} | AnswerB: ${answersArray[1]} | AnswerC: ${answersArray[2]} `);
    });
  }

  // Start countdown to next question...
  startCountdown() {

    clearInterval(this.state.questionTimer);

    // SetState
    let timeCurrent = this.state.timerCurrent;

    let questionTimer = setInterval(() => {
      // Decrement each iteration
      timeCurrent -= 1;
      // SetState
      this.setState({
        timerCurrent: timeCurrent,
      });

      // If no answer if given, time out and move on
      if (timeCurrent <= 0) {
        this.jumpTo(null);
      }
    }, 1000);

    // SetState - save timer object in state
    this.setState({ questionTimer: questionTimer });
  }

  handleSelectedValue(event) {

    let userAnswer = event ? Number(event.currentTarget.value) : null;
    let addPoint = this.state.answerScore;
    addPoint += 1; //iterate

    if (userAnswer === Number(this.state.correctAnswer)) {
      this.setState({
        answerScore: addPoint,
        countTransition: false,
      });
      console.log('Correctamundo!');
    }
  }

  // Next button
  jumpTo(event) {

    let currentPage = this.state.currentPage;
    currentPage += 1; // increment

    // If we've triggered the Quiz, Show it...
    if (currentPage === 1) {

      // Transition Out
      setTimeout(() => {
        this.setState({
          show: !this.state.show,
          countTransition: false
        });

        // Transition In
        setTimeout(() => {

          this.setState({
            // Transition Out
            show: !this.state.show,
            showIntro: !this.state.showIntro,
            showQuiz: !this.state.showQuiz,
            currentPage: currentPage,
            timerCurrent: 10,

          }, () => {
            this.startCountdown();
            // Delay because of parent display: block stopping the transtion
            setTimeout(() => {
              this.setState({ countTransition: true, });
            }, 1);
          });

        }, duration);
      }, duration);

      // Keep on Quizing until Results are needed
    } else if (currentPage > 1 && currentPage < this.state.questionsTotal + 1) {

      this.handleSelectedValue(event);

      // Transition Out
      setTimeout(() => {
        this.setState({
          show: !this.state.show,
          countTransition: false,
        });
        // Transition In
        setTimeout(() => {

          // Generate random values
          this.generateQuestionValues(event);

          this.setState({
            // Transition Out
            show: !this.state.show,
            currentPage: currentPage,
            countTransition: true,
            timerCurrent: 10,

          }, () => {
            this.startCountdown();
          });

        }, duration);
      }, duration);

      // Else, results page
    } else {

      clearInterval(this.state.questionTimer);
      this.handleSelectedValue(event);

      // Transition Out
      setTimeout(() => {
        this.setState({
          show: !this.state.show,
          timerCurrent: 10,
          questionTimer: 0,
          countTransition: false,
        });

        // Process Results
        //this.processResults();

        // Transition In
        setTimeout(() => {
          this.setState({
            // Transition Out
            show: !this.state.show,
            showQuiz: !this.state.showQuiz,
            showResults: !this.state.showResults,
            currentPage: currentPage,
            siteIntro: 'Results',
            pageText: 'You scored:',
            pageButtonText: 'Restart',
            // pageButtonText: 'Next level',

          });
        }, duration);
      }, duration);
    }
  }

  // Reset everything
  reset() {

    // Transition Out
    setTimeout(() => {
      this.setState({ show: !this.state.show });
      // Generate random values

      this.generateQuestionValues();

      // Transition In
      setTimeout(() => {

        this.setState({
          show: !this.state.show,
          showIntro: true,
          showQuiz: false,
          showResults: false,
          pageButtonText: 'Try again',
          countTransition: false,
          currentPage: 0,
          questionText: 'What is...',
          instruction: 'Select your answer before the timer runs out',
          answerScore: 0,
          pageText: 'Try again and do your best! ;)',
          totalTimeToDeduct: 0,
        });


      }, duration);
    }, duration);
  }

  onNextLevel() {

    // Transition Out
    setTimeout(() => {
      this.setState({ show: !this.state.show });
      // Generate random values

      this.generateQuestionValues();

      // Transition In
      setTimeout(() => {

        this.setState({
          show: !this.state.show,
          showIntro: true,
          showQuiz: false,
          showResults: false,
          pageButtonText: 'Second level, Go!',
          countTransition: false,
          currentPage: 0,
          questionText: 'What is...',
          instruction: 'Select your answer before the timer runs out',
          answerScore: 0,
          pageText: 'Are you ready for the second level ? It will be harder than previous ;)',
          totalTimeToDeduct: 0,
          questionValueMin: 10,
          questionValueMax: 30,
        });


      }, duration);
    }, duration);
  }

  // Render stuff
  render() {
    return (

      <section className={css.siteWrapper} >
        <header className={css.siteHeader}>
          <h1 className={css.title}>
            {this.state.siteTitle}
          </h1>
          <p className={css.quizRound} style={{ display: this.state.showQuiz ? 'inline-block' : 'none' }}>
            <span className={css.roundNo}>{this.state.currentPage}</span>
            <span className={css.roundOf}>{this.state.questionsTotal}</span>
          </p>
        </header>

        <IntroPage
          display={this.state.showIntro}
          content={this.state.pageText}
          buttonText={this.state.pageButtonText}
          onClick={this.jumpTo}
        />

        <Fade in={this.state.show}>
          <div className={css.wrapper}>
            <section className={css.quiz} style={{ display: this.state.showQuiz ? 'block' : 'none' }}>
              <Question questionText={this.state.questionText} valueA={this.state.questionValueA} operator={this.state.questionOperator} valueB={this.state.questionValueB} />
              <section className={css.answerWrap} >
                <AnswerButton answer={this.state.answer1} outcome={this.state.outcome1} onClick={this.jumpTo} />
                <AnswerButton answer={this.state.answer2} outcome={this.state.outcome2} onClick={this.jumpTo} />
                <AnswerButton answer={this.state.answer3} outcome={this.state.outcome3} onClick={this.jumpTo} />
              </section>
              <Timer displayProp={this.state.countTransition ? 'countdown-started' : ''} />
            </section>

            <ResultsPage
              display={this.state.showResults}
              content={this.state.pageText}
              score={this.state.answerScore}
              outOf={this.state.questionsTotal}
              // buttonText={this.state.pageButtonText}
              buttonText={this.state.pageButtonText}
              onClick={this.reset}
              onNextLevel={this.onNextLevel}
            />
          </div>
        </Fade>
      </section>

    );
  }
}

export default App;
