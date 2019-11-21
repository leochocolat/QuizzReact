import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import {Context} from './provider/Provider';

const Home = lazy(() => import('./pages/Home'));
const Quizz = lazy(() => import('./pages/Quizz'));
const Login = lazy(() => import('./pages/Login'));
const Results = lazy(() => import('./pages/Results'));

const App = () => {

  return (
    <Context.Consumer>
      {({state}) => (
        <Router>
        <Suspense fallback={<div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>Chargement...</div>}>
          <Switch>
            <Route exact path="/">
                {state.username === null ?  <Redirect to="/login" /> : <Home />}
            </Route>
            <Route exact path="/login">
                {state.username !== null ?  <Redirect to="/" /> : <Login />}
            </Route>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/quizz/:quizzId" component={Quizz}/>
            <Route exact path="/quizz/:quizzId/results" component={Results}/>
          </Switch>
        </Suspense>
      </Router>
      )}
      
    </Context.Consumer>
  )
};

export default App;
