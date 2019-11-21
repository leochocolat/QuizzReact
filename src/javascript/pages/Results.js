import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {Context} from '../provider/Provider';

import AnimOpacity from '../modules/AnimOpacity';
import AnimTitlesModule from '../modules/AnimTitlesModule';
import { TweenLite, Power3 } from 'gsap';

const Results = (props) => {

    const context = React.useContext(Context);
    const id = props.match.params.quizzId;
    const pathToAssets = require.context(`../../assets/images/`, true);

    const currentQuestion = context.state.currentTheme;

    let style = {};
    if (currentQuestion) {
        style = {
            backgroundImage: `url(${pathToAssets(`./${currentQuestion.image}`)})`,
        }
    }

    useEffect(() => {
        context.dispatch({type: 'getCurrentTheme', id});
        context.dispatch({type: 'resetDifficulty'});

        let header = document.querySelector('.js-header-results');
        let animTitles = new AnimTitlesModule(document.querySelectorAll('.js-anim-title'));
        new AnimOpacity(document.querySelectorAll('.js-opacity')).transitionIn();
        TweenLite.to(header, 1, { height: '35%', ease: Power3.easeInOut });
        setTimeout(() => {
            animTitles.transitionIn();
        }, 700);

        return () => context.dispatch({type: 'resetTheme'});
    }, [id]);

    return (
        <section className="page-results">
            <header className="header-results js-header-results" style={style}>
                <h1 className="header-results__heading js-opacity">Resultat</h1>
            </header>
            <section className="section-results js-opacity">
                <h2 className="section-results__subheading js-anim-title">{currentQuestion && currentQuestion.title}</h2>
                <div className="section-results__results js-anim-title">
                    <p>{context.state.score.filter(score => score === 1).length}/10</p>
                </div>
                <NavLink to='/' className="section-results__leave-button">Quitter</NavLink>
                <NavLink to={`/quizz/${(parseInt(id) + 1) % 8 }`} className="section-results__next-button">Quizz suivant</NavLink>
            </section>
        </section>
    )
}

export default Results;