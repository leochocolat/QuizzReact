import React from 'react';
import ThemeSection from '../sections/ThemeSection';
import themeData from '../../assets/data/themeData.json';
import CursorComponent from '../components/CursorComponent';
import SmoothScrollModule from '../modules/SmoothScrollModule';

class Home extends React.Component {

  componentDidMount() {
    this.scroll = new SmoothScrollModule(
      document.querySelector('.js-scroll-container')
    );
  }

  render() {
    return (
      <section className="js-scroll-container">
        {themeData.map((theme, index) => <ThemeSection key={index} {...theme} />)}
        <CursorComponent />
      </section>
    )
  }
}

export default Home;