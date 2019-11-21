import React, {useEffect} from 'react';
import {Context} from '../provider/Provider';

const DifficultyComponent = (props) => {

    const context = React.useContext(Context);
    
    const id = props.id;
    
    const pathToAssets = require.context(`../../assets/images/`, true);

    const currentQuestion = context.state.currentTheme;

    let style = {};
    if (currentQuestion) {
        style = {
            backgroundImage: `url(${pathToAssets(`./${currentQuestion.image}`)})`,
        }
    }

    useEffect(() => {
        context.dispatch({type: 'getCurrentTheme', id})
        return () => context.dispatch({type: 'resetTheme'})
    }, [id])

    const chooseDifficulty = (e) => {
        let difficulty = e.target.innerHTML
        context.dispatch({type: 'setDifficulty', difficulty})
        e.preventDefault();
    }

    return (
        <section className="section-difficulty" style={style}>
            <div className="section-difficulty__content">
                <div className="section-difficulty__title">Choisissez votre difficulté</div>
                <button className="section-difficulty__button" onClick={(e) => chooseDifficulty(e)}>débutant</button>
                <button className="section-difficulty__button" onClick={(e) => chooseDifficulty(e)}>confirmé</button>
                <button className="section-difficulty__button" onClick={(e) => chooseDifficulty(e)}>expert</button>
            </div>
        </section>
    )
}

export default DifficultyComponent;