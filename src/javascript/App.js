import React from 'react';
import ThemeSection from './sections/ThemeSection';

import CursorComponent from './components/CursorComponent';

import imgGameOfThrones from '../assets/images/gameOfThrones_background.jpg';
import imgLesVisiteurs from '../assets/images/lesVisiteurs_background.jpg';
import imgHarryPotter from '../assets/images/harryPotter_background.jpg';
import imgHungerGames from '../assets/images/hungerGames_background.jpg';
import imgMarvel from '../assets/images/marvel_background.jpg';
import imgBreakingBad from '../assets/images/breakingBad_background.jpg';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <ThemeSection key="0" title="Game of Thrones" image={imgGameOfThrones}/>
        <ThemeSection key="1" title="Les visiteurs" image={imgLesVisiteurs}/>
        <ThemeSection key="2" title="Harry Potter" image={imgHarryPotter}/>
        <ThemeSection key="3" title="Hunger Games" image={imgHungerGames}/>
        <ThemeSection key="4" title="Marvel" image={imgMarvel}/>
        <ThemeSection key="5" title="Breaking Bad" image={imgBreakingBad}/>

        <CursorComponent />
      </section>
    )
  }
}

export default App;
