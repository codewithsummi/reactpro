import React from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Changepass from './components/Changepass';
import Category from './components/Category';
import Addcategory from './components/Addcategory';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/dashboard' exact component={Dashboard}/>
          <Route path='/changepass' exact component={Changepass}/>
          <Route path='/category' exact component={Category}/>
          <Route path='/addcategory' exact component={Addcategory}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
