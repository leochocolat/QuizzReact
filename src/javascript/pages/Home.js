import React from 'react';
import ThemeSection from '../sections/ThemeSection';
import CursorComponent from '../components/CursorComponent';
import ThemeContext from '../provider/ThemeContext';

export default class Home extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({themeList}) => (
          <section>
            {themeList.map((theme, index) => <ThemeSection key={index} {...theme} />)}
            <CursorComponent />
          </section>
        )}
      </ThemeContext.Consumer>
    )
  }
}
