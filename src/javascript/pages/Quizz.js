import React from 'react';

class Quizz extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.match.params);
    const style = {
      backgroundImage: ''
    }

    return (
      <section className="page-quizz">
        <header className="header-quizz" style={style}>
          <h1 className="header-quizz__heading">Question 1</h1>
        </header>
        <section className="section-question">
          <div className="section-question__question">
            Quel animal apparaît sur le blason des Lannister ?
          </div>
          <ul className="section-question__list-response">
            <li className="section-question__list-response-item">
              Un cheval
            </li>
            <li className="section-question__list-response-item">
              Un ours
            </li>
            <li className="section-question__list-response-item">
              Un lion
            </li>
            <li className="section-question__list-response-item">
              Un aigle
            </li>
          </ul>
          <div className="section-question__progress">
            1/10
          </div>
          <button className="section-question__leave-button">Quitter</button>
        </section>
      </section>
    )
  }
}

export default Quizz;