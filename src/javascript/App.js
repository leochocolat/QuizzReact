import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Quizz = lazy(() => import('./pages/Quizz'));
const Login = lazy(() => import('./pages/Login'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Chargement...</div>}>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/quizz/:quizzId" component={Quizz}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;