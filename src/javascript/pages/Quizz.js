import React, {useEffect} from 'react';
import {Context} from '../provider/Provider';
import ScoreContext from '../provider/ScoreContext';

const Quizz = (props) => {

  const context = React.useContext(Context);

  const id = props.match.params.quizzId;
  
  const pathToAssets = require.context(`../../assets/images/`, true);

  const scoreContext = React.useContext(ScoreContext);
  const [questionId, setQuestionId] = React.useState(0);
  const [points, setPoints] = React.useState([]);

  const currentQuestion = context.state.currentTheme;

  let style = {};
  if (currentQuestion) {
    style = {
      backgroundImage: `url(${pathToAssets(`./${currentQuestion.image}`)})`,
    }
  }
  
  useEffect(() => {
    context.dispatch({type: 'getCurrentTheme', id})
    context.dispatch({type: 'getCurrentThemeQuestions', id})
    return () => context.dispatch({type: 'reset'})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  function handleResponse(e) {
    verifyResponse(e.target.innerHTML);

    if (questionId >= context.state.currentThemeQuestions.quizz.débutant.length - 1) {
      console.log('fini');
      scoreContext.setScore(id, points);
    } else {
      setQuestionId(questionId => questionId + 1);
    };
  }

  function verifyResponse(response) {
      if (response === context.state.currentThemeQuestions.quizz.débutant[questionId].réponse) {
        setPoints(points => { points.push(1); return points });
        console.log('true');
      } else {
        setPoints(points => { points.push(0); return points });
        console.log('false');
      }
  }

  return (
    <section className="page-quizz">
    <header className="header-quizz" style={currentQuestion && style}>
      <h1 className="header-quizz__heading">Question {context.state.currentThemeQuestions && context.state.currentThemeQuestions.quizz.débutant[questionId].id}</h1>
    </header>
    <section className="section-question">
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
      <button className="section-question__leave-button">Quitter</button>
    </section>
  </section>
  )

}
export default Quizz;
