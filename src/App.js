import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import Landing from './pages/landing/Landing';
import User from './pages/user/User';
import AppProvider from './AppProvider';
import './App.style.scss';


const App = () => {
  return (
    <AppProvider>
      <div>

        <MenuBar />
        <Router>
          <Switch>
            <Route path={'/'} exact component={Landing} />
            <Route path={'/user'} component={User}/>
          </Switch>
        </Router>

      </div>
    </AppProvider>
  );
}

export default App;
