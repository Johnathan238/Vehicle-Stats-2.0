import React from 'react'
import { Link } from 'react-router-dom'
import { getVehicles } from '../services/apihelper'
import { Component } from 'react'

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
            <Link to={`/vehicles/${vehicle.id}`}><p>{vehicle.color}</p></Link>
            <img src={vehicle.url} />
            <Link to={`/vehicles/${vehicle.id}/edit`}><button>Edit</button></Link>
            <button onCLick={() => this.state.handleVehicleDelete(vehicle.id)}>Delete</button>
          </React.Fragment>
        ))}
        <br />
        <Link to="/vehicle/new"><button>Add Vehicle</button></Link>
      </div>
    )
  }
}
