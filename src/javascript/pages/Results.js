import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import ScoreContext from '../provider/ScoreContext';

class Results extends React.Component {
    render() {
        const style = {
            backgroundImage: `url()`
        }

        return (
            <section className="page-results">
                <header className="header-results" style={style}>
                    <h1 className="header-results__heading">Resultats</h1>
                </header>
                <section className="section-results">
                    <h2 className="section-results__subheading">Breaking Bad</h2>
                    <div className="section-results__results">
                        <p>8/10</p>
                    </div>
                    <NavLink to='/' className="section-results__leave-button">Quitter</NavLink>
                    <NavLink to='/' className="section-results__next-button">Quizz suivant</NavLink>
                </section>
            </section>
        )
    }
}

export default Results;