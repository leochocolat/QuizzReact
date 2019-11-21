import React, {useEffect} from 'react';
import {Context} from '../provider/Provider';
import AnimTitlesModule from '../modules/AnimTitlesModule';
import AnimOpacity from '../modules/AnimOpacity';

const DifficultyComponent = (props) => {

    const context = React.useContext(Context);
    
    const id = props.id;
    const title = props.title;

    let animTitlesModule, animOpacityModule;
    
    const pathToAssets = require.context(`../../assets/images/`, true);

    const currentQuestion = context.state.currentTheme;

    let style = {};

    if (currentQuestion) {
        style.backgroundImage = `url(${pathToAssets(`./${currentQuestion.image}`)})`;
    }

    useEffect(() => {
        animTitlesModule = new AnimTitlesModule(document.querySelectorAll('.js-difficulty-button'));
        animOpacityModule = new AnimOpacity(document.querySelectorAll('.js-opacity'));

        animTitlesModule.transitionIn();
        animOpacityModule.transitionIn();

        context.dispatch({type: 'getCurrentTheme', id});
        return () => context.dispatch({type: 'resetTheme'})
    }, [id]);

    const chooseDifficulty = (e) => {
        let difficulty = e.target.innerHTML;
        new AnimTitlesModule(document.querySelectorAll('.js-difficulty-button')).transitionOut();
        new AnimOpacity(document.querySelectorAll('.js-opacity')).transitionOut();

        setTimeout(() => {
            context.dispatch({type: 'setDifficulty', difficulty})
        }, 1000);

        e.preventDefault();
    }

    return (
        <section className="section-difficulty" style={style}>
            <div className="section-difficulty__filter js-difficulty-filter js-opacity"></div>
            <div className="section-difficulty__content">
                <div className="section-difficulty__title js-opacity">Choisissez votre difficulté</div>
                <button className="section-difficulty__button js-difficulty-button" onClick={(e) => chooseDifficulty(e)}>débutant</button>
                <button className="section-difficulty__button js-difficulty-button" onClick={(e) => chooseDifficulty(e)}>confirmé</button>
                <button className="section-difficulty__button js-difficulty-button" onClick={(e) => chooseDifficulty(e)}>expert</button>
                <div className="section-difficulty__subtitle js-opacity">{title}</div>
            </div>
        </section>
    )
}

export default DifficultyComponent;