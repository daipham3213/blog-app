import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NotFound from './components/common/NotFound';
import AuthPage from './components/pages/auth';

function App() {
  return (
      <>
        <Switch>
          <Route path="/login">
            <AuthPage />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </>
  );
}

export default App;
