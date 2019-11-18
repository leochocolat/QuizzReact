import React from 'react';
import ThemeSection from './sections/ThemeSection';
import themeData from '../assets/data/themeData.json';

class App extends React.Component {

  render() {
    return (
      <section>
        {themeData.map((theme, index) => <ThemeSection key={index} {...theme} />)}
      </section>
    )
  }
}

export default App;
