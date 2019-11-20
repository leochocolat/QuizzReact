import React from 'react';
import {Context} from '../provider/Provider';

const Login = () => {

  const [value, setValue] = React.useState('');

  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value)
  }
  
  return (
    <Context.Consumer>
      {({dispatch}) => (
        <section className="page-login">
          <form onSubmit={() => dispatch({type: 'setUsername', value})}>
              <label className="page-login__label">
              Enter username to begin
              <input className="page-login__input" type="text" placeholder='username' value={value} onChange={(e) => handleChange(e)} />
              </label>
          </form>
        </section>
      )}
    </Context.Consumer>
  )
}

export default Login;
