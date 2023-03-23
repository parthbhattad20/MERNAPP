
import React from 'react';


import {BrowserRouter as Router ,Route , Redirect , Switch} from 'react-router-dom';
import User from './user/users';
import NewPlaces from './places/NewPlaces';
import MainNavigation from './shared/Navigation/MainNavigation';


function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation/>
        <main>
        <Switch>
        <Route path="/">
          <User/>
           
        </Route>
        <Route path="/places/newplace">
          <NewPlaces/>
           
        </Route>
        <Redirect to ="/"/>
        </Switch>
        </main>
      </Router>
        
    
    </div>
  );
}

export default App;
