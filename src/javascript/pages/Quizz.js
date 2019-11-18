import React from 'react';

class Quizz extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h1>QUIZZ</h1>
        <p>id : {this.props.match.params.quizzId}</p>
      </section>
    )
  }
}

export default Quizz;