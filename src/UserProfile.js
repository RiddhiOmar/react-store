import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class UserProfile extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
          <h1 className='text-center'>User Profile</h1>
          <br></br>
            <div className='card col-md-4 offset-md-4 offset-md-3 bg-primary'>
              <div className='card-body mx-5 my-4'>
                <Link to="Login" className='px-3 py-2 mx-3 bg-success text-white ' style={{ textDecoration: 'none',border: '1px solid white',borderRadius: '6px' }}>Login</Link>
                <Link to="Register" className='px-3 py-2 bg-success text-white ' style={{ textDecoration: 'none',border: '1px solid white',borderRadius: '6px' }} >Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
