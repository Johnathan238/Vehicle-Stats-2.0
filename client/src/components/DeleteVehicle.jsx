import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { getVehicles } from '../services/apihelper'
import ShowVehicle from './ShowVehicle'
export default class DeleteVehicle extends Component {
  state = {
    vehicles: []
  }

  componentDidMount = async () => {
    const vehicles = await getVehicles()
    this.setState({
      vehicles
    })
  }

  fetchVehicles = async () => {
    const vehicles = await getVehicles();
    this.setState({ vehicles })
  }



  render() {
    return (
      <>
        <Route exact path='/showvehicle' render={() => (
          <ShowVehicle
            vehicles={this.state.vehicles}
            handleVehicleDelete={this.handleVehicleDelete}
          />
        )} />

      </>
    )
  }
}