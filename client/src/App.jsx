import React from 'react';
import Login from './components/Login'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Switch } from 'react-router-dom'
import ShowVehicle from './components/ShowVehicle'
import AddVehicle from './components/AddVehicle'
import UpdateVehicle from './components/UpdateVehicle';


function App() {
  return (
    <div className="app">

      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login} />
        
        <Route  path='/showvehicle' component={ShowVehicle} />
        <Route exact path='/updatevehicle' component={UpdateVehicle} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
