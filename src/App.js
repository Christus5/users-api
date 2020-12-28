import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import Landing from './pages/landing/Landing';
import AppProvider from './AppProvider';

const App = () => {
  return (
    <AppProvider>
      <div>

        <MenuBar />
        <Router>
          <Switch>
            <Route path={'/'} exact component={Landing} />
            <Route path={'/user'} />
          </Switch>
        </Router>

      </div>
    </AppProvider>
  );
}

export default App;
