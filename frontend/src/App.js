
import React from 'react';


import {BrowserRouter as Router ,Route , Redirect , Switch} from 'react-router-dom';
import User from './user/users';
import NewPlaces from './places/NewPlaces';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/users">
          <User/>
           
        </Route>
        <Route path="/places/newplace">
          <NewPlaces/>
           
        </Route>
        <Redirect to ="/"/>
        </Switch>
      </Router>
        
    
    </div>
  );
}

export default App;
