import React from 'react';
import ThemeSection from '../sections/ThemeSection';
import themeData from '../../assets/data/themeData.json';
import CursorComponent from '../components/CursorComponent';

class Home extends React.Component {
  render() {
    return (
      <section>
        {themeData.map((theme, index) => <ThemeSection key={index} {...theme} />)}
        <CursorComponent />
      </section>
    )
  }
}

export default Home;