import React, { Component } from 'react';
import './updateVehicle.scss'
import { editVehicle, showVehicle } from '../services/apihelper'



export default class UpdateVehicle extends Component {
  state = {
    color: '',
    engine: '',
    transmission: '',
    year: '',
    url: ''
  }

  componentDidMount = async () => {
    const vehicle = await showVehicle(this.props.match.params.id)
    this.setState({
      color: vehicle.color, engine: vehicle.engine, transmission: vehicle.transmission, year: vehicle.year, url: vehicle.url
    })
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const updated = await editVehicle(this.props.match.params.id, this.state)
    console.log(UpdateVehicle)
    this.props.history.push('/showvehicle')
  }

  render() {
    const { handleVehicleUpdate, history, id } = this.props;
    return (
      <>
        <div className="vehicleEdit--container">
          <div className="vehicle-edit">
            <h3>Update Vehicle</h3>

            <form onSubmit={this.handleSubmit} className="edit-form">

              <div className="inputWrapper">
                <label for="name">Vehicle Color:</label>
                <input
                  type="text"
                  className="edit-input-color"
                  placeholder='Color'
                  value={this.state.color}
                  name='color'
                  required
                  autoFocus
                  onChange={this.handleChange} />
              </div>

              <div className="inputWrapper">
                <label for="Engine">Vehicle engine:</label>
                <input
                  className="edit-input-engine"
                  placeholder='Engine Type'
                  value={this.state.engine}
                  name='engine'
                  required
                  onChange={this.handleChange} />
              </div>

              <div className="inputWrapper">
                <label for="Transmission">Vehicle Transmission:</label>
                <input
                  className="edit-input-transmission"
                  placeholder='Transmission'
                  value={this.state.transmission}
                  name='transmission'
                  required
                  onChange={this.handleChange} />
              </div>

              <div className="inputWrapper">
                <label for="imgURL">Vehicle image link:</label>
                <input
                  className="edit-input-image-link"
                  placeholder='Image Link'
                  value={this.state.url}
                  name='url'
                  required
                  onChange={this.handleChange} />
              </div>

              <button type='submit' className="submit-button">Submit Please!</button>

            </form>
          </div>
        </div>
      </>
    )
  }
}

