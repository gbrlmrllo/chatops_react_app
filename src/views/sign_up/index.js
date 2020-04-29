import React, { Component } from 'react';
import { connect } from 'react-redux';
import userSignUp from '../../models/session/actions/user_sign_up';

class Signup extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userSignUp(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>Email</label>
          <input
            className='form-control'
            name='email'
            placeholder='Email'
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className='form-control'
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        
        <button type='submit' className='btn btn-primary btn-block'>Submit</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userSignUp: userInfo => dispatch(userSignUp(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);