import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import AddVehicle from './AddVehicle'
import { getVehicles, deleteVehicles, getModels, getManufacturers, putVehicle } from '../services/apihelper'
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
    console.log("hello")
    await deleteVehicles(id)
    this.setState(prevState => ({
      vehicles: prevState.vehicles.filter(vehicle => vehicle.id !== id)
    }))
  }
   
  handleVehicleUpdate = async (id, vehicleData) => {
    const newVehicle = await putVehicle(id, vehicleData);
    this.setState(prevState => ({
      vehicle: prevState.vehicles.map(vehicle => vehicle.id === parseInt(id) ? newVehicle : vehicle)
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
      <React.Fragment>
        <Route exact path='/showvehicle'>
      <div>
        <h3>Vehicles</h3>
        {this.state.vehicles.map(vehicle => (
          <React.Fragment key={vehicle.id}>
            <img className="vehicle--image" src={vehicle.url} />
            <Link to={`/vehicles/${vehicle.id}/updatevehicle`}><button>Edit</button></Link>
            <button onClick={() => this.handleVehicleDelete(vehicle.id)}>Delete</button>
            <div className="vehicle--content">
              {/* <p>{this.state.models}</p> */}
              <p>{vehicle.color}</p>
              <p>{vehicle.engine}</p>
              <p>{vehicle.transmission}</p>
              <p>{vehicle.year}</p>
            </div>
          </React.Fragment>
        ))}
          </div>
          </Route>
       {this.state.models.length>0&&this.state.manufacturers.length>0&& <Route path='/showvehicle/addvehicle'>
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
    )
  }
 }

 export default withRouter(ShowVehicle)
