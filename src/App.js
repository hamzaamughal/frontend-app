import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import UserItem from './user/components/UserItem';
import UsersList from './user/components/UsersList';
import Users from './user/pages/Users';

function App() {
  return (
    <Router>
      <Route path='/' component={Users} />
      <Redirect from='/' to='/home' />
    </Router>
  );
}

export default App;
