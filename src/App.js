import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserItem from './user/components/UserItem';
import UsersList from './user/components/UsersList';
import Users from './user/pages/Users';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' component={Users} />
          <Route path='/places/new' exact component={NewPlace} />
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
