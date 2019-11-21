import {themeData} from '../../assets/data/themeData.js';
import breakingBad from '../../assets/data/breakingBad';
import fifthElement from '../../assets/data/fifthElement';
import gameOfThrones from '../../assets/data/gameOfThrones';
import hungerGames from '../../assets/data/hungerGames';
import jurassicPark from '../../assets/data/jurassicPark';
import marvel from '../../assets/data/marvel';
import princessesDisney from '../../assets/data/princessesDisney';
import starWars from '../../assets/data/starWars';

export const initialState = {
    username : null,
    themeList : themeData,
    currentTheme : null,
    currentThemeQuestions : null,
    score : {}
};

export const Reducer = (state, action) => {
    switch (action.type) {
        case 'setUsername':
            return {...state, username : action.value}
        case 'getCurrentTheme':
            return {...state, currentTheme : state.themeList.find(theme => theme.id === action.id)}
        case 'getCurrentThemeQuestions':
            switch (state.currentTheme.json) {
                case 'breaking-bad':
                    return {...state, currentThemeQuestions : breakingBad}
                case 'fifth-element':
                    return {...state, currentThemeQuestions : fifthElement}
                case 'game-of-thrones':
                    return {...state, currentThemeQuestions : gameOfThrones}
                case 'hunger-games':
                    return {...state, currentThemeQuestions : hungerGames}
                case 'jurassic-park':
                    return {...state, currentThemeQuestions : jurassicPark}
                case 'marvel':
                    return {...state, currentThemeQuestions : marvel}
                case 'princesses-disney':
                    return {...state, currentThemeQuestions : princessesDisney}
                case 'star-wars':
                    return {...state, currentThemeQuestions : starWars}
                default:
                    console.log('Sorry, not founded');
            };
            break;
        case 'resetTheme':
            return {...state, currentTheme : null};
        case 'setScore':
            return {...state, score : action.points}
        default:
            return state;
    }
}
