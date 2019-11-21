import React, {useEffect} from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import {Context} from '../provider/Provider';
import DifficultyComponent from '../components/DifficultyComponent';

import TimeModule from '../modules/TimerModule';
import AnimOpacity from '../modules/AnimOpacity';
import { TweenLite, Power3 } from 'gsap';

let timeModule;
const DURATIONMAX = 20;

const Quizz = (props) => {

  const context = React.useContext(Context);

  const id = props.match.params.quizzId;
  
  const pathToAssets = require.context(`../../assets/images/`, true);

  const [questionId, setQuestionId] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [points, setPoints] = React.useState([]);
  const [allowRedirect, setAllowRedirect] = React.useState(false);

  const currentTheme = context.state.currentTheme;
  const currentThemeQuestion = context.state.currentThemeQuestions;
  const difficulty = context.state.difficulty;

  let interval;

  let style = {};
  if (currentTheme) {
    style = {
      backgroundImage: `url(${pathToAssets(`./${currentTheme.image}`)})`,
    }
  }

  const updateTime = () => {
    interval = setInterval(() => {
      setDuration(duration => duration + 1);
    }, 1000);
  }

  useEffect(() => {
    if (!context.state.difficulty) return;

    context.dispatch({type: 'getCurrentTheme', id});
    context.dispatch({type: 'getCurrentThemeQuestions', id});

    let header = document.querySelector('.js-header-quizz');
    new AnimOpacity(document.querySelectorAll('.js-opacity')).transitionIn();
    TweenLite.to(header, 1, { height: '35%', ease: Power3.easeInOut });

    setTimeout(() => {
      timeModule = new TimeModule(DURATIONMAX);
      updateTime();
    }, 1000);
    
    return () => context.dispatch({type: 'resetDifficulty'})
  }, [context.state.difficulty]);

  useEffect(() => {
    if (duration !== DURATIONMAX) return;
    verifyResponse('');
    nextQuestion();
  }, [duration]);

  useEffect(() => {
    if (points.length !== 10) return;
    context.dispatch({type: 'setScore', id, points});
    clearInterval(interval);
    setPoints([]);
    
    let header = document.querySelector('.js-header-quizz');
    new AnimOpacity(document.querySelectorAll('.js-opacity')).transitionOut();
    TweenLite.to(header, 1, { height: '100%', ease: Power3.easeInOut });

    setTimeout(() => {
      setAllowRedirect(true);
    }, 1000);


  }, [points.length]);

  const verifyResponse = (response) => {
    if (response === currentThemeQuestion.quizz[difficulty][questionId].réponse) {
      setPoints(points => { points.push(1); return points });
    } else {
      setPoints(points => { points.push(0); return points });
    }
  }

  const nextQuestion = () => {
    setDuration(0);
    timeModule.restart();

    if (currentTheme && questionId >= currentThemeQuestion.quizz[difficulty].length - 1) return;
    setQuestionId(questionId => questionId + 1);
  }

  const handleResponse = (e) => {
    verifyResponse(e.target.innerHTML);
    nextQuestion();
    e.preventDefault();
  }

  return (
    <section className="page-quizz">
      {context.state.difficulty ? (
        <React.Fragment>
          <header className="header-quizz js-header-quizz" style={currentTheme && style}>
            <h1 className="header-quizz__heading js-opacity">Question {currentThemeQuestion && currentThemeQuestion.quizz[difficulty][questionId].id}</h1>
          </header>
          <section className="section-question js-opacity">
            <div className="section-question__timer js-timer">{duration}</div>
            <h2 className="section-question__subheading">{currentTheme && currentTheme.title}</h2>
            <div className="section-question__question">
              <p>{currentThemeQuestion && currentThemeQuestion.quizz[difficulty][questionId].question}</p>
            </div>
            <ul className="section-question__list-response">
              {currentThemeQuestion && currentThemeQuestion.quizz[difficulty][questionId].propositions.map((response, index) => <li onClick={handleResponse} className="section-question__list-response-item" key={index}>{response}</li>)}
            </ul>
            <div className="section-question__progress">
              {currentThemeQuestion && currentThemeQuestion.quizz[difficulty][questionId].id}/10 - {difficulty}
            </div>
            <NavLink to={`/`}>
              <button className="section-question__leave-button">Quitter</button>
            </NavLink>
            {allowRedirect && <Redirect to={`/quizz/${id}/results`} />}
          </section>
        </React.Fragment>
      ) : (
        <DifficultyComponent id={id} title={currentTheme && currentTheme.title}/>
      )}
      
      
    </section>
  )

}

export default Quizz;
