import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

  componentDidMount() {
    
  }

  handleChange(e) {
    this.setState({
        value: e.target.value
    });
  }

  handleSubmit(e) {
    
    e.preventDefault();
  }

  render() {
    return (
      <section className="page-login">
        <form onSubmit={this.handleSubmit}>
            <label className="page-login__label">
            Enter username to begin
            <input className="page-login__input" type="text" placeholder='username' value={this.state.value} onChange={(e) => this.handleChange(e)} />
            </label>
            <input className="page-login__submit" type="submit" value="Envoyer" onSubmit={(e) => this.handleSubmit(e)} />
        </form>
      </section>
    )
  }
}

export default Login;