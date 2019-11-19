import React, {useEffect} from 'react';
import ThemeContext from '../provider/ThemeContext';

const Quizz = (props) => {

  const id = props.match.params.quizzId;
  const state = React.useContext(ThemeContext)

  useEffect(() => {
      state.setTheme(id)
    return () => state.resetTheme()
  }, [id])

  const themeInfos = state.getThemeInfos(id);

  return (
    <section className="page-quizz">
    <header className="header-quizz">
      <h1 className="header-quizz__heading">Question 1</h1>
    </header>
    <section className="section-question">
      <div className="section-question__question">
        <p>{themeInfos.title}</p>
        Quel animal apparaît sur le blason des Lannister ?
        <p>{state.json && state.json.quizz.débutant[3].question}</p>
      </div>
      <ul className="section-question__list-response">
        <li className="section-question__list-response-item">
          Un cheval
        </li>
        <li className="section-question__list-response-item">
          Un ours
        </li>
        <li className="section-question__list-response-item">
          Un lion
        </li>
        <li className="section-question__list-response-item">
          Un aigle
        </li>
      </ul>
      <div className="section-question__progress">
        1/10
      </div>
      <button className="section-question__leave-button">Quitter</button>
    </section>
  </section>
  )

}
export default Quizz;
