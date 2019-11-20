import React from 'react';
import ThemeSectionComponent from '../components/ThemeSectionComponent';
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
            <div className="page-home__username" data-scroll data-scroll-sticky data-scroll-target=".js-scroll-container">Hello {username}</div>
            {themeList.map((theme, index) => <ThemeSectionComponent key={index} {...theme} />)}
            <CursorComponent />
          </section>
        )}
      </ThemeContext.Consumer>
    )
  }
}
