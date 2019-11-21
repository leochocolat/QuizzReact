import React, {useEffect} from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import {Context} from '../provider/Provider';

import TimeModule from '../modules/TimerModule';

let timeModule;
const DURATIONMAX = 10;

const Quizz = (props) => {

  const context = React.useContext(Context);

  const id = props.match.params.quizzId;
  
  const pathToAssets = require.context(`../../assets/images/`, true);

  const [questionId, setQuestionId] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [points, setPoints] = React.useState([]);
  const [allowRedirect, setAllowRedirect] = React.useState(false);

  const currentQuestion = context.state.currentTheme;

  let interval;


  let style = {};
  if (currentQuestion) {
    style = {
      backgroundImage: `url(${pathToAssets(`./${currentQuestion.image}`)})`,
    }
  }
  
  useEffect(() => {
    context.dispatch({type: 'getCurrentTheme', id})
    context.dispatch({type: 'getCurrentThemeQuestions', id})
    setPoints([]);
    timeModule = new TimeModule(DURATIONMAX);
    clearInterval(interval);
    updateTime();
    return () => context.dispatch({type: 'resetTheme'})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])


  const handleResponse = (e) => {
    verifyResponse(e.target.innerHTML);
    nextQuestion();
    e.preventDefault();
  }

  useEffect(() => {
    if (duration === DURATIONMAX) {
      verifyResponse('');
      nextQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  useEffect(() => {
    if (points.length === 10) {
      context.dispatch({type: 'setScore', id, points})
      setAllowRedirect(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points.length])

  const updateTime = () => {
    interval = setInterval(() => {
      setDuration(duration => duration + 1);
    }, 1000);
  }

  const nextQuestion = () => {
    setDuration(0);
    timeModule.restart();

    if (currentQuestion && questionId >= context.state.currentThemeQuestions.quizz.débutant.length - 1) return;
    setQuestionId(questionId => questionId + 1);
  }

  const verifyResponse = (response) => {
      if (response === context.state.currentThemeQuestions.quizz.débutant[questionId].réponse) {
        setPoints(points => { points.push(1); return points });
      } else {
        setPoints(points => { points.push(0); return points });
      }
  }

  return (
    <section className="page-quizz">
      <header className="header-quizz" style={currentQuestion && style}>
        <h1 className="header-quizz__heading">Question {context.state.currentThemeQuestions && context.state.currentThemeQuestions.quizz.débutant[questionId].id}</h1>
      </header>
      <section className="section-question">
        <div className="section-question__timer js-timer">{duration}</div>
        <h2 className="section-question__subheading">{currentQuestion && currentQuestion.title}</h2>
        <div className="section-question__question">
          <p>{context.state.currentThemeQuestions && context.state.currentThemeQuestions.quizz.débutant[questionId].question}</p>
        </div>
        <ul className="section-question__list-response">
          {context.state.currentThemeQuestions && context.state.currentThemeQuestions.quizz.débutant[questionId].propositions.map((response, index) => <li onClick={handleResponse} className="section-question__list-response-item" key={index}>{response}</li>)}
        </ul>
        <div className="section-question__progress">
          {context.state.currentThemeQuestions && context.state.currentThemeQuestions.quizz.débutant[questionId].id}/10
        </div>
        <NavLink to={`/`}>
          <button className="section-question__leave-button">Quitter</button>
        </NavLink>
        {allowRedirect && <Redirect to={`/quizz/${id}/results`} />}
      </section>
    </section>
  )

}

export default Quizz;
