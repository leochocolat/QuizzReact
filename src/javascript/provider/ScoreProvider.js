import React from 'react';

import ScoreContext from '../provider/ScoreContext';

export default class ScoreProvider extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            scores: {},
            setScore: (theme, question, point) => this.setScore(theme, question, point)
        }
    }

    setScore(theme, points) {
        let scores = this.state.scores;
        scores[theme] = points;
        console.log(scores);
    }

    render() {
        return (
            <ScoreContext.Provider value={this.state}>
                {this.props.children}
            </ScoreContext.Provider>
        );
    }
}
