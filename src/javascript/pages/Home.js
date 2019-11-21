import React, {useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import ThemeSectionComponent from '../components/ThemeSectionComponent';
import CursorComponent from '../components/CursorComponent';
import SmoothScrollModule from '../modules/SmoothScrollModule';
import {Context} from '../provider/Provider';
import { TimelineLite, Power3 } from 'gsap';

const Home = () => {

  const [allowRedirect, setAllowRedirect] = React.useState(false);
  const [themeId, setThemeId] = React.useState(0);
  let scrollModule = {};

  useEffect(() => {
    scrollModule = new SmoothScrollModule(
      document.querySelector('.js-scroll-container')
    );
  }, []);

  const handleClick = (theme) => {
    let title = document.querySelector(`#theme-${theme.id} span`);

    scrollModule.scrollTo(`#theme-${theme.id}`);
    setThemeId(theme.id);
  
    let timeline = new TimelineLite({ onComplete: () => { setAllowRedirect(true) } });
    timeline.to(title, 1, { y: -100, ease: Power3.easeInOut }, 0);
  }

  return (
    <Context.Consumer>
        {({state}) => (
          <section className="js-scroll-container">
            <div className="page-home__username" data-scroll data-scroll-sticky data-scroll-target=".js-scroll-container">Bonjour {state.username}</div>
            {state.themeList.map((theme, index) => 
              <section clase onClick={() => handleClick(theme)}>
                <ThemeSectionComponent key={index} {...theme} />
              </section>
            )}
            <CursorComponent />
            {allowRedirect && <Redirect to={`/quizz/${themeId}`} />}
          </section>
        )}
    </Context.Consumer>
  )
}

export default Home;
