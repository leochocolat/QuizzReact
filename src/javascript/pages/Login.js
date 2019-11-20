import React from 'react';
import ThemeContext from '../provider/ThemeContext';

const Login = () => {

  const context = React.useContext(ThemeContext);
  const [value, setValue] = React.useState('');

  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value)
  }
  
  return (
    <section className="page-login">
      <form onSubmit={() => context.setUsername(value)}>
          <label className="page-login__label">
          Enter username to begin
          <input className="page-login__input" type="text" placeholder='username' value={value} onChange={(e) => handleChange(e)} />
          </label>
          {/* <input className="page-login__submit" type="submit" value="Envoyer" /> */}
      </form>
    </section>
  )
}

export default Login;