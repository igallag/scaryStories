import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const navbarStyle = {
  color: 'goldenrod',
  backgroundImage:
    'url(https://cdnb.artstation.com/p/assets/images/images/015/516/361/large/sherif-habashi-camp-07-stylized.jpg?1548660452)',
  backgroundPosition: '90%'
}

const Navbar = ({handleClick, isLoggedIn}) => (
  <div style={navbarStyle}>
    <div id="nav-title">
      <img
        src="https://scarystoriesfromcamproanoke.files.wordpress.com/2017/08/cropped-largest-finished-logo.jpg"
        height="150"
        width="150"
      />
      <h1>Scary Stories from Camp Roanoke</h1>
    </div>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <Link to="/stories">Stories</Link>
          <Link to="/stories/stats">Stats</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
