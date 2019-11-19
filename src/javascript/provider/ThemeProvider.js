import React from 'react';

import themeData from '../../assets/data/themeData';
import breakingBad from '../../assets/data/breakingBad';
import fifthElement from '../../assets/data/fifthElement';
import gameOfThrones from '../../assets/data/gameOfThrones';
import hungerGames from '../../assets/data/hungerGames';
import jurassicPark from '../../assets/data/jurassicPark';
import marvel from '../../assets/data/marvel';
import princessesDisney from '../../assets/data/princessesDisney';
import starWars from '../../assets/data/starWars';

import ThemeContext from '../provider/ThemeContext';

export default class ThemeProvider extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            username : null,
            setUsername : this.setUsername,
            themeList : themeData,
            setTheme : this.getTheme,
            resetTheme: () => this.setState({json: null}),
            getThemeInfos: this.getThemeInfos,
            json : null
        }
    }

    setUsername = (name) => {
        this.setState({username : name});
    }

    getThemeInfos = (id) => {
        return this.state.themeList.find(theme => theme.id === id);
    }

    getTheme = (id) => {
        let theme = this.getThemeInfos(id);

        switch (theme.json) {
            case 'breaking-bad':
                this.setState({json : breakingBad});
                break;
            case 'fifth-element':
                this.setState({json : fifthElement});
                break;
            case 'game-of-thrones':
                this.setState({json : gameOfThrones});
                break;
            case 'hunger-games':
                this.setState({json : hungerGames});
                break;
            case 'jurassic-park':
                this.setState({json : jurassicPark});
                break;
            case 'marvel':
                this.setState({json : marvel});
                break;
            case 'princesses-disney':
                this.setState({json : princessesDisney});
                break;
            case 'star-wars':
                this.setState({json : starWars});
                break;
            default:
                console.log('Sorry, not founded');
        }
        return this.state;
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
