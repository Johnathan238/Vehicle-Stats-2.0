import React from 'react'
import { Link } from 'react-router-dom'
import { getVehicles } from '../services/apihelper'
import { Component } from 'react'
import DeletleVehicle from './DeleteVehicle'

export default class ShowVehicle extends Component {
  state = {
    vehicles: []
  }

  componentDidMount = async () => {
    const vehicles = await getVehicles()
    this.setState({
      vehicles
    })
  }
  render() {
    return (
      <div>
        <h3>Vehicles</h3>
        {this.state.vehicles.map(vehicle => (
          <React.Fragment key={vehicle.id}>
            <img className="vehicle--image" src={vehicle.url} />
            <p>{vehicle.color}</p>
            <p>{vehicle.engine}</p>
            <p>{vehicle.transmission}</p>
            <p>{vehicle.year}</p>
            <Link to={`/vehicles/${vehicle.id}/updatevehicle`}><button>Edit</button></Link>
            <button onCLick={() => this.state.handleVehicleDelete(vehicle.id)}>Delete</button>
          </React.Fragment>
        ))}
        <br />
      </div>
    )
  }
}
