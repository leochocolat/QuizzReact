import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import ThemeContext from './provider/ThemeContext';

const Home = lazy(() => import('./pages/Home'));
const Quizz = lazy(() => import('./pages/Quizz'));
const Login = lazy(() => import('./pages/Login'));
const Results = lazy(() => import('./pages/Results'));

const App = () => {

  const context = React.useContext(ThemeContext)

  return (
    <Router>
      <Suspense fallback={<div>Chargement...</div>}>
        <Switch>
          <Route exact path="/">
              {context.username === null ?  <Redirect to="/login" /> : <Home />}
          </Route>
          <Route exact path="/login">
              {context.username !== null ?  <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/quizz/:quizzId" component={Quizz}/>
          <Route exact path="/quizz/:quizzId/results" component={Results}/>
        </Switch>
      </Suspense>
    </Router>
)
};

export default App;
