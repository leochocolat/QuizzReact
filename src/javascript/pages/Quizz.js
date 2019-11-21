import React, {useEffect} from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import ThemeContext from '../provider/ThemeContext';
import ScoreContext from '../provider/ScoreContext';

import TimeModule from '../modules/TimerModule';

let timeModule;
const DURATIONMAX = 10;

const Quizz = (props) => {

  const id = props.match.params.quizzId;
  const context = React.useContext(ThemeContext);
  const pathToAssets = require.context(`../../assets/images/`, true);

  const scoreContext = React.useContext(ScoreContext);

  const [questionId, setQuestionId] = React.useState(0);
  let [duration, setDuration] = React.useState(0);
  let [points, setPoints] = React.useState([]);
  let [allowRedirect, setAllowRedirect] = React.useState(false);
  const theme = context.getTheme(id);

  const style = {
    backgroundImage: `url(${pathToAssets(`./${context.themeList[id].image}`)})`,
  }
  
  useEffect(() => {
    context.setTheme(id);
    timeModule = new TimeModule(DURATIONMAX);
    updateTime();
    return () => context.resetTheme();
  }, [id]);

  useEffect(() => {
    if (duration === DURATIONMAX) {
      verifyResponse('');
      nextQuestion();
    }
  }, [duration]);

  useEffect(() => {
    if (points.length === 10) {
      scoreContext.setScore(id, points);
      setAllowRedirect(true);
    }
  }, [points.length])

  function updateTime() {
    setInterval(() => {
      setDuration(duration => duration + 1);
    }, 1000);
  }

  function nextQuestion() {
    setDuration(0);
    timeModule.restart();
    if (context.json && questionId >= context.json.quizz.débutant.length - 1) {
      
    } else {
      setQuestionId(questionId => questionId + 1);
    };
  }

  function handleResponse(e) {
    verifyResponse(e.target.innerHTML);
    nextQuestion();
  }

  function verifyResponse(response) {
    if (context.json && response === context.json.quizz.débutant[questionId].réponse) {
      setPoints(points => { points.push(1); return points });
    } else {
      setPoints(points => { points.push(0); return points });
    }
  }

  return (
    <section className="page-quizz">
      <header className="header-quizz" style={style}>
        <h1 className="header-quizz__heading">Question {context.json && context.json.quizz.débutant[questionId].id}</h1>
      </header>
      <section className="section-question">
        <div className="section-question__timer js-timer">{duration}</div>
        <h2 className="section-question__subheading">{theme.title}</h2>
        <div className="section-question__question">
          <p>{context.json && context.json.quizz.débutant[questionId].question}</p>
        </div>
        <ul className="section-question__list-response">
          {context.json && context.json.quizz.débutant[questionId].propositions.map((response, index) => <li onClick={handleResponse} className="section-question__list-response-item" key={index}>{response}</li>)}  
        </ul>
        <div className="section-question__progress">
          {context.json && context.json.quizz.débutant[questionId].id}/10
        </div>
        
        <NavLink to='/' className="section-question__leave-button">Quitter</NavLink>
      </section>
      {allowRedirect && <Redirect to='/'/>}
    </section>
  )

}

export default Quizz;
