import React, {useEffect} from 'react';
import ThemeSectionComponent from '../components/ThemeSectionComponent';
import CursorComponent from '../components/CursorComponent';
import SmoothScrollModule from '../modules/SmoothScrollModule';
import {Context} from '../provider/Provider';

const Home = () => {

  useEffect(() => {
    new SmoothScrollModule(
      document.querySelector('.js-scroll-container')
    );
  }, []);

  return (
    <Context.Consumer>
        {({state}) => (
          <section className="js-scroll-container">
            <div className="page-home__username" data-scroll data-scroll-sticky data-scroll-target=".js-scroll-container">Bonjour {state.username}</div>
            {state.themeList.map((theme, index) => <ThemeSectionComponent key={index} {...theme} />)}
            <CursorComponent />
          </section>
        )}
    </Context.Consumer>
  )
}

export default Home;
