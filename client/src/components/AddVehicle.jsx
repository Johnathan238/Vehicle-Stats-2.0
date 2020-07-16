import React, { Component } from 'react'
import { Redirect } from 'react-router'
import './addVehicle.scss'
import { withRouter } from 'react-router-dom'
// import { getVehicles, addVehicles} from '../services/apihelper'


 class AddVehicle extends Component {
  constructor() {
    super()
    this.state = {
      vehicles: null,
      addVehicle: false,
      vehicle: {
        color: ''
      }
    }
  }
   
  //  componentDidMount = async () => {
  //    const id = this.props.match.params.id
  //    const vehicles = await getVehicles(id)
  //    this.setState({
  //      vehicles
  //    })
  //  }

  //  toggleAdd = () => {
  //    this.setState(prevState => ({
  //      addVehicle: !prevState.addVehicle
  //    }))
  //  }

  // handleChange = (e) => {
  //   const { color, value } = e.target
  //   this.setState({
  //    vehicle: {
  //     ...this.state.vehicle,
  //     [color]: value
  //    }
  //   })
  // }
  
  // handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const newVehicle = await addVehicle(this.props.match.params.id, this.state.vehicle)
  //   console.log(newVehicle)
  //   this.setState(prevState => ({
  //     vehicles: [...prevState.vehicles, newVehicle]
  //   }))
  //  }

  render() {
    return (
      <>
        <div className="vehicleCreate">
          <form 
            autoComplete="off"
            className="vehicleCreate" onSubmit={this.handleSubmit}>
            <input
              className="vehicleCreate-input"
              placeholder="Vehicle Color"
              // value={vehicle.color}
              color='color'
              required
              autoFocus
              onChange={this.handleChange} />
            <button type='submit' className="submit-button">Let's add that new vehicle</button>
            </form>
        </div>
      </>
    )
  }
 }
 export default withRouter(AddVehicle)