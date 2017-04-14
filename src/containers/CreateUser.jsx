import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Signup } from '../components';

export default class CreateUser extends Component {
  constructor (props) {
    super(props);
    // Initial state
    this.state = { newUser: {}};
    // Bind this (context) to the functions to be passed down to the children components
    this.submit = this.submit.bind(this);
    this.setUser = this.setUser.bind(this);
  }
  submit (event) {
    event.preventDefault();
    // We create the newUser object to be posted to the server
    const newUser = Object.assign({}, this.state.newUser);
    fetch('http://localhost:8080/user', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      // We go to the quiz view
      browserHistory.push('/quiz');
    });
  }
  // We make sure to keep the state up-to-date to the latest input values
  setUser () {
    const newUser = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value
    };
    this.setState({ newUser });
  };
  render () {
    return <Signup submit={this.submit} setUser={this.setUser} />
  }
}
