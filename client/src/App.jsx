import React from 'react';
import Login from './components/Login'
// import Header from './components/Header'
import { Route, Switch } from 'react-router-dom'
import AddVehicle from './components/AddVehicle';


function App() {
  return (
    <div className="app">

      {/* <Header /> */}
      <Switch>
        <Route exact path='/Login' component={Login} />
        <Route path='/addvehicle' component={AddVehicle} />
      </Switch>

    </div>
  );
}

export default App;
