import React, {useEffect} from 'react';
import ThemeContext from '../provider/ThemeContext';
import ScoreContext from '../provider/ScoreContext';

const Quizz = (props) => {

  const id = props.match.params.quizzId;
  const context = React.useContext(ThemeContext);
  const pathToAssets = require.context(`../../assets/images/`, true);

  const scoreContext = React.useContext(ScoreContext);

  const [questionId, setQuestionId] = React.useState(0);
  const [points, setPoints] = React.useState([]);
  // setPoints(points => []);
  const themeInfos = context.getThemeInfos(id);

  const style = {
    backgroundImage: `url(${pathToAssets(`./${context.themeList[id].image}`)})`,
  }
  
  useEffect(() => {
    context.setTheme(id);
    return () => context.resetTheme();
  }, [id])

  function handleResponse(e) {
    verifyResponse(e.target.innerHTML);

    if (questionId >= context.json.quizz.débutant.length - 1) {
      console.log('fini');
      scoreContext.setScore(id, points);
    } else {
      setQuestionId(questionId => questionId + 1);
    };
  }

  function verifyResponse(response) {
      if (response === context.json.quizz.débutant[questionId].réponse) {
        setPoints(points => { points.push(1); return points });
        console.log('true');
      } else {
        setPoints(points => { points.push(0); return points });
        console.log('false');
      }
  }

  return (
    <section className="page-quizz">
    <header className="header-quizz" style={style}>
      <h1 className="header-quizz__heading">Question {context.json && context.json.quizz.débutant[questionId].id}</h1>
    </header>
    <section className="section-question">
      <h2 className="section-question__subheading">{themeInfos.title}</h2>
      <div className="section-question__question">
        <p>{context.json && context.json.quizz.débutant[questionId].question}</p>
      </div>
      <ul className="section-question__list-response">
        {context.json && context.json.quizz.débutant[questionId].propositions.map((response, index) => <li onClick={handleResponse} className="section-question__list-response-item" key={index}>{response}</li>)}  
      </ul>
      <div className="section-question__progress">
        {context.json && context.json.quizz.débutant[questionId].id}/10
      </div>
      <button className="section-question__leave-button">Quitter</button>
    </section>
  </section>
  )

}
export default Quizz;
