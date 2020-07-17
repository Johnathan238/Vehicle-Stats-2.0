import React, { Component } from 'react';
import './updateVehicle.scss'


export default class UpdateVehicle extends Component {
  state = {
    color: '',
    engine: '',
    transmission: '',
    year: '',
    url: ''
  }

  componentDidMount() {
    if (this.props.addVehicle) {
      this.setFormData();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.addVehicle !== this.props.addVehicle) {
      this.setFormData();
    }
  }

  setFormData = () => {
    this.setState({
      name: this.props.addVehicle.color
    })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      color: value
    })
  }

  render() {
    const { handleVehicleUpdate, history, id } = this.props;
    return (
      <>
        <div className="vehicleEdit--container">
          <div className="vehicle-edit">
            <form onSubmit={(e) => {
              e.preventDefault();
              handleVehicleUpdate(id, this.state);
              history.push('/vehicles');
            }}>
              <h3>Update Vehicle</h3>

              <form onSubmit={this.handleSubmit} className="edit-form"></form>

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
                  name='Engine'
                  required
                  onChange={this.handleChange} />
              </div>

              <div className="inputWrapper">
                <label for="Transmission">Vehicle Transmission:</label>
                <input
                  className="edit-input-transmission"
                  placeholder='Transmission'
                  value={this.state.transmission}
                  name='Transmission'
                  required
                  onChange={this.handleChange} />
              </div>

              <div className="inputWrapper">
                <label for="imgURL">Vehicle image link:</label>
                <input
                  className="edit-input-image-link"
                  placeholder='Image Link'
                  value={this.state.url}
                  name='imgURL'
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

