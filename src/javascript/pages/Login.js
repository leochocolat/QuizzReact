import React from 'react';
import {Context} from '../provider/Provider';

const Login = () => {

  const [username, setUsername] = React.useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
    e.preventDefault();
  }
  
  return (
    <Context.Consumer>
      {({dispatch}) => (
        <section className="page-login">
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
