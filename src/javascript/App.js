import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import ThemeProvider from './provider/ThemeProvider';

const Home = lazy(() => import('./pages/Home'));
const Quizz = lazy(() => import('./pages/Quizz'));
// const Login = lazy(() => import('./pages/Login'));

const App = () => (
  <ThemeProvider>
    <Router>
      <Suspense fallback={<div>Chargement...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/quizz/:quizzId" component={Quizz}/>
        </Switch>
      </Suspense>
    </Router>
  </ThemeProvider>
);

export default App;
