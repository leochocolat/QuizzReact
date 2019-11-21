import React, {useEffect} from 'react';
import {Context} from '../provider/Provider';
import CarouselModule from '../modules/CarouselModule';

const Login = () => {

  const [username, setUsername] = React.useState('');

  useEffect(() => {
    new CarouselModule(document.querySelector('.js-background'));
  }, []);

  const handleChange = (e) => {
    setUsername(e.target.value);
    e.preventDefault();
  }
  
  return (
    <Context.Consumer>
      {({dispatch}) => (
        <section className="page-login">
          <section className="page-login__background-wrapper js-background"></section>
          <form onSubmit={() => dispatch({type: 'setUsername', username})}>
              <label className="page-login__label">
                Entre ton pseudo
              <input className="page-login__input" type="text" placeholder='ici' value={username} onChange={(e) => handleChange(e)} />
              </label>
          </form>
        </section>
      )}
    </Context.Consumer>
  )
}

export default Login;
