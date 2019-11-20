import React, {useEffect} from 'react';
import ThemeContext from '../provider/ThemeContext';

const Quizz = (props) => {

  const id = props.match.params.quizzId;
  const context = React.useContext(ThemeContext)
  const pathToAssets = require.context(`../../assets/images/`, true);
  
  useEffect(() => {
    context.setTheme(id)
    return () => context.resetTheme()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const theme = context.getTheme(id);

  const style = {
    backgroundImage: `url(${pathToAssets(`./${context.themeList[id].image}`)})`,
  }

  return (
    <section className="page-quizz">
    <header className="header-quizz" style={style}>
      <h1 className="header-quizz__heading">Question 1</h1>
    </header>
    <section className="section-question">
      <h2 className="section-question__subheading">{theme.title}</h2>
      <div className="section-question__question">
        <p>{context.json && context.json.quizz.débutant[0].question}</p>
      </div>
      <ul className="section-question__list-response">
        {context.json && context.json.quizz.débutant[0].propositions.map((response, index) => <li className="section-question__list-response-item" key={index}>{response}</li>)}  
      </ul>
      <div className="section-question__progress">
        {context.json && context.json.quizz.débutant[0].id}/10
      </div>
      <button className="section-question__leave-button">Quitter</button>
    </section>
  </section>
  )

}
export default Quizz;
