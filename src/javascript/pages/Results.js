import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {Context} from '../provider/Provider';

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
        context.dispatch({type: 'getCurrentTheme', id})
        context.dispatch({type: 'resetDifficulty'})
        return () => context.dispatch({type: 'resetTheme'})
    }, [id])

    return (
        <section className="page-results">
            <header className="header-results" style={style}>
                <h1 className="header-results__heading">Resultats</h1>
            </header>
            <section className="section-results">
                <h2 className="section-results__subheading">{currentQuestion && currentQuestion.title}</h2>
                <div className="section-results__results">
                    <p>{context.state.score.filter(score => score === 1).length}/10</p>
                </div>
                <NavLink to='/' className="section-results__leave-button">Quitter</NavLink>
                <NavLink to={`/quizz/${(parseInt(id) + 1) % 8 }`} className="section-results__next-button">Quizz suivant</NavLink>
            </section>
        </section>
    )
}

export default Results;