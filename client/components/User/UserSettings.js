import React from 'react'
import {connect} from 'react-redux'

const UserSetting = props => {
  return (
    <div>
      <h2>Settings</h2>
      <div>
        <h3>Your Info</h3>
        <p />
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
