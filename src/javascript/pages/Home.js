import React from 'react';
import ThemeSection from '../sections/ThemeSection';
import CursorComponent from '../components/CursorComponent';
import SmoothScrollModule from '../modules/SmoothScrollModule';
import ThemeContext from '../provider/ThemeContext';

export default class Home extends React.Component {

  componentDidMount() {
    this.scroll = new SmoothScrollModule(
      document.querySelector('.js-scroll-container')
    );
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({username, themeList}) => (
          <section className="js-scroll-container">
            <p>{username}</p>
            {themeList.map((theme, index) => <ThemeSection key={index} {...theme} />)}
            <CursorComponent />
          </section>
        )}
      </ThemeContext.Consumer>
    )
  }
}
