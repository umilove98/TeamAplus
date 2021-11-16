import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ListPage from './pages/ListPage';

function App() {
  return (
    <>
      <Route path="/" component={ListPage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </>
  );
}

export default App;