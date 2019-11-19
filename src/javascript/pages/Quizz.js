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
        
        <section>
          <h1>QUIZZ : {themeInfos.title}</h1>
          <p>{state.json && state.json.quizz.débutant[3].question}</p>
        </section>
  )

}
export default Quizz;
