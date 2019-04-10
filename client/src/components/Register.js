import React, { Component } from 'react';
import {register} from './UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name:'',
            last_name:'',
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }

        register(user).then(res => {
            this.props.history.push(`/login`)
        })
    }

  render() {
    return (
      <div className='container'>
        <div class="row mt-5">
        <div class="col-md-6 m-auto">
          <div class="card card-body">
            <h1 class="text-center mb-3">
              <i class="fas fa-user-plus"></i> Register
            </h1>
            <form noValidate onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="first_name">First Name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  class="form-control"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}/>
              </div>
              <div class="form-group">
                <label for="last_name">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  class="form-control"
                  placeholder="Enter your last name"
                  value={this.state.last_name}
                  onChange={this.onChange}/>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.onChange}/>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-control"
                  placeholder="Create Password"
                  value={this.state.password}
                  onChange={this.onChange}/>
              </div>
              <button type="submit" class="btn btn-primary btn-block">
                Register
              </button>
            </form>
            <p class="lead mt-4">Have An Account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Register
