import React from 'react';

class DifficultyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    chooseDifficulty(e) {
        console.log(e.target.innerHTML);
    }

    render() {
        const style = {
            backgroundImage: `url()`
        }

        return (
            <section className="section-difficulty" style={style}>
                <div className="section-difficulty__content">
                    <div className="section-difficulty__title">Choisissez votre difficulté</div>
                    <button className="section-difficulty__button" onClick={(e) => this.chooseDifficulty(e)}>débutant</button>
                    <button className="section-difficulty__button" onClick={(e) => this.chooseDifficulty(e)}>confirmé</button>
                    <button className="section-difficulty__button" onClick={(e) => this.chooseDifficulty(e)}>expert</button>
                </div>
            </section>
        )
    } 
}

export default DifficultyComponent;