import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import Landing from './pages/landing/Landing';

const App = () => {
  return (
    <div>
      <MenuBar/>
      <Router>
        <Switch>
          <Route path={'/'} exact component={Landing}/>
          <Route path={'/user'} />
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
