import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import AddVehicle from './AddVehicle'
import { getVehicles, deleteVehicles, getModels, getManufacturers } from '../services/apihelper'
import { Component } from 'react'
import './ShowVehicle.scss'
import UpdateVehicle from './UpdateVehicle'

class ShowVehicle extends Component {
  state = {
    vehicles: [],
    models: [],
    manufacturers: []
  }

  componentDidMount = async () => {
    const vehicles = await getVehicles()
    const models = await getModels()
    const manufacturers = await getManufacturers()
    this.setState({
      models,
      vehicles,
      manufacturers
    })
  }


  handleVehicleDelete = async (id) => {
    await deleteVehicles(id)
    this.setState(prevState => ({
      vehicles: prevState.vehicles.filter(vehicle => vehicle.id !== id)
    }))
  }

  addNewVehicle = (newVehicle) => {
    this.setState(prevState => ({
      vehicles: [...prevState.vehicles, newVehicle]
    }))
    this.props.history.push('/showvehicle')
  }

  render() {
    return (
      <div className="vehicle--container">
        <React.Fragment>
          <Route exact path='/showvehicle'>
            <h3>Vehicles</h3>
            <div className="all--vehicles">
              {this.state.vehicles.map(vehicle => (
                <div className="vehicles" key={vehicle.id}>
                  <img className="vehicle--image" src={vehicle.url} />
                  <div className="button-container">
                    <Link to={`/vehicles/${vehicle.id}/updatevehicle`}><button className="edit-button">Edit</button></Link>
                    <button className="delete-button" onClick={() => this.handleVehicleDelete(vehicle.id)}>Delete</button>
                  </div>
                  <div className="vehicle--content">
                    <p>{vehicle.color}</p>
                    <p>{vehicle.engine}</p>
                    <p>{vehicle.transmission}</p>
                    <p>{vehicle.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </Route>
          {this.state.models.length > 0 && this.state.manufacturers.length > 0 && <Route path='/showvehicle/addvehicle'>
            <AddVehicle
              models={this.state.models}
              manufacturers={this.state.manufacturers}
              addNewVehicle={this.addNewVehicle}
            />
          </Route>}
          <Route path='/vehicles/:id/edit' render={(props) => {
            const { id } = props.match.params
            const vehicleItem = this.state.vehicles.find(vehicle => vehicle.id === parseInt(id))
            return <UpdateVehicle
              {...props}
              handleVehicleUpdate={this.handleVehicleUpdate}
              vehicleItem={vehicleItem}
              id={id}
            />
          }}>

          </Route>
        </React.Fragment>
      </div>
    )
  }
}

export default withRouter(ShowVehicle)
