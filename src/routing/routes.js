import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { CreateUser, CreateQuiz } from '../containers';
import { Signup, Quiz, Confirm } from '../components';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={CreateUser}>
      <IndexRoute component={Signup} />
    </Route>
    <Route path="/quiz" component={CreateQuiz}>
      <IndexRoute component={Quiz} />
    </Route>
    <Route path="/confirm" component={Confirm}
    />
  </Router>
);

export default routes;
