import React, { Component } from 'react'
import './addVehicle.scss'
import { withRouter } from 'react-router-dom'
import { addVehicles } from '../services/apihelper'


 class AddVehicle extends Component {
  constructor() {
    super()
    this.state = {
      vehicle: {
        color: '',
        engine: '',
        transmission: '',
        year: '',
        url: ''
      },
      model: null,
      manufacturer: null
    }
  }
   

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
     vehicle: {
      ...this.state.vehicle,
      [name]: value
     }
    })
  }
   
   handleModelChange = (e) => {
     const { value } = e.target
     this.setState({
       model:value
     })
   }

   handleManufacturerChange = (e) => {
    const { value } = e.target
    this.setState({
      manufacturer:value
    })
  }
  
  handleSubmit = async (e) => {
    e.preventDefault()
    const newVehicle = await addVehicles( this.state.vehicle, this.state.manufacturer, this.state.model)
    console.log(newVehicle)
    this.props.addNewVehicle(newVehicle)
   }

  render() {
    return (
      <>
        <div className="vehicleCreate--wrapper">
        <div className="vehicleCreate">
          <form 
            autoComplete="off"
              className="vehicleCreate" onSubmit={this.handleSubmit}>
              <select
                required
                onChange={this.handleManufacturerChange}
              >
                <option disabled selected>-- Select a Manufacturer --
                </option>
                {this.props.manufacturers.map(manufacturer => (
                  <option value={manufacturer.id}>{manufacturer.name}</option>
                ))}
              </select>
              <select
                required
                onChange={this.handleModelChange}
              >
                <option disabled selected>-- Select a Model --
                </option>
                {this.props.models.map(model => (
                  <option value={model.id}>{model.name}</option>
                ))}
              </select>

            <input
              className="vehicleCreate-input"
              placeholder="Vehicle Color"
              value={this.state.vehicle.color}
              name='color'
              required
              autoFocus
              onChange={this.handleChange} />
            
            <input
              className="vehicleCreate-input"
              placeholder="Vehicle engine"
              value={this.state.vehicle.engine}
              name='engine'
              required
              autoFocus
              onChange={this.handleChange} />
            
            <input
              className="vehicleCreate-input"
              placeholder="Vehicle transmission"
              value={this.state.vehicle.transmission}
              name='transmission'
              required
              autoFocus
              onChange={this.handleChange} />
            
            <input
              className="vehicleCreate-input"
              placeholder="Vehicle year"
              value={this.state.vehicle.year}
              name='year'
              required
              autoFocus
              onChange={this.handleChange} />
            
            <input
              className="vehicleCreate-input"
              placeholder="Vehicle url image"
              value={this.state.vehicle.url}
              name='url'
              required
              autoFocus
              onChange={this.handleChange} />
            <button type='submit' className="submit-button">Let's add that new vehicle</button>
            </form>
          </div>
          </div>
      </>
    )
  }
 }
 export default withRouter(AddVehicle)