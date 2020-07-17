import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { deleteVehicles, getVehicles } from '../services/apihelper'
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

  handleVehicleDelete = async (id) => {
    await deleteVehicles(id)
    this.setState(prevState => ({
      vehicles: prevState.vehicles.filter(vehicle => vehicle.id !== id)
    }))
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