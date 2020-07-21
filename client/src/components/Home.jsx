import React from 'react'
import { Link } from 'react-router-dom'
import { Component } from 'react'
import './Home.scss'

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
      
        <Link to={"/ShowVehicle"}>
          <h1>Let's see some cars!</h1>
          <img className="Home--Vehicle" src="https://w.wallhaven.cc/full/zm/wallhaven-zm6d3y.jpg" alt=" Nissan s15 Car" />
        </Link>

      </div>
    )
  }
}