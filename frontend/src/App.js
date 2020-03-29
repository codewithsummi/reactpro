import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import CategoryProducts from './components/CategoryProducts';
import Login from './components/Login';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <div>
         <Header/>
         <section>
            <Switch>
              <Route path="/" exact component={Main}/>
              <Route path="/about" exact component={About}/>
              <Route path="/contact" exact component={Contact}/>
              <Route path="/category-products/:cname" exact component={CategoryProducts}/>
            <Route path="/login" exact component={Login}/>
            </Switch>
         </section>
         <Footer/>
    </div>
    </Router>
    );
}

export default App;
