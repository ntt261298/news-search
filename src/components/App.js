import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/App.css';
import HomePage from './Home';
import DetailPage from './Detail';
import Page404 from './Layout/404';

export const App = props => (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/detail/:title" exact component={DetailPage}  />
        <Route component={Page404} />
      </Switch>
    </div>
  </Router>
);

export default App;
