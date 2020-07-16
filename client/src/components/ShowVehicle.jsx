import React from 'react'
import { Link } from 'react-router-dom'

export default function ShowVehicle(props) {
  return (
    <div>
      <h3>Vehicles</h3>
      {props.vehicle.map(vehicle => {
        <React.Fragment key={vehicle.id}>
          <Link to={`/vehicles/${vehicle.id}`}><p>{vehicle.color}</p></Link>
          <Link to={`/vehicles/${vehicle.id}/edit`}><button>Edit</button></Link>
          <button onCLick={() => props.handleVehicleDelete(vehicle.id)}>Delete</button>
        </React.Fragment>
      })}
      <br />
      <Link to="/vehicle/new"><button>Add Vehicle</button></Link>
    </div>
  )
}
