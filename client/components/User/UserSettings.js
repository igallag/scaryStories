import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const UserSetting = props => {
  const {user} = props
  return (
    <div>
      <h2>Settings</h2>
      <div>
        <h3>Your Info</h3>
        <p>{user.email}</p>
        <button type="button" onClick={() => alert('build me!')}>
          Edit Information
        </button>
      </div>
      <div>
        <Link to="/users/settings/darkMode">
          <button type="button">NightMode</button>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserSetting)
