import React, { Component } from 'react'

class Landing extends Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron mt-5'>
            <div className='col-sm-8 mx-auto'>
                Welcome
            </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-6 m-auto">
            <div class="card card-body text-center">
              <h1><i class="fab fa-node-js fa-3x"></i></h1>
              <p>Create an account or login</p>
              <a href="/register" class="btn btn-primary btn-block mb-2">Register</a>
              <a href="/login" class="btn btn-secondary btn-block">Login</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
