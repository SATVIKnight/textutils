import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>

        <input type="radio" className="btn-check" name="options" id="option1" autocomplete="off" checked mx-1/>
        <label className="btn btn-secondary" for="option1" onClick={props.toggleLight}>Light</label>

        <input type="radio" className="btn-check" name="options" id="option2" autocomplete="off" mx-1/>
        <label className="btn btn-secondary" for="option2" onClick={props.toggleDark}>Dark</label>

        <input type="radio" className="btn-check" name="options" id="option4" autocomplete="off" mx-1/>
        <label className="btn btn-secondary" for="option4" onClick={props.toggleGreen}>Green</label>

        {/* <div className={`form-check form-switch text-${props.mode==='light'? 'dark': 'light'}`}>
        <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div> */}
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes= {
    title: PropTypes.string,
    about: PropTypes.string
}
Navbar.defaultProps = {
    title : "Set title here",
    about : "About here"
}