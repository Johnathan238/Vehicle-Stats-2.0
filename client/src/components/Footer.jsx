import React from 'react'
import './Shared.scss'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--details">

      <marquee>
        <div className="footer--details-container sei-developers">
            <p className="footer--text">&copy; Developed by: Johnathan Umana - &copy; Developed by: Johnathan Umana - &copy; Developed by: Johnathan Umana
            - &copy; Developed by: Johnathan Umana - &copy; Developed by: Johnathan Umana - &copy; Developed by: Johnathan Umana</p>
          </div>
        </marquee>

        <marquee>
          <p className="footer--siteTitle"> &copy; Vehicle-Stats-2.0 &copy; 2020 - Vehicle-Stats-2.0 &copy; 2020 -Vehicle-Stats-2.0 &copy; 2020 -
          Vehicle-Stats-2.0 &copy; 2020 - Vehicle-Stats-2.0 &copy; 2020 - Vehicle-Stats-2.0 &copy; 2020 - Vehicle-Stats-2.0 &copy; 2020</p>
        </marquee>

      </div>
    </footer>
  )
}

export default Footer;