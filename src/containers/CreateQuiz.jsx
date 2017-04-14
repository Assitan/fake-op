import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Quiz } from '../components';

export default class CreateQuiz extends Component {
  constructor (props) {
    super(props);
    // Initial state
    this.state = { newQuiz: {}};
    // Bind this (context) to the functions to be passed down to the children components
    this.submit = this.submit.bind(this);
    this.setQuiz = this.setQuiz.bind(this);
  }
  submit (event) {
    event.preventDefault();
    // We create the newQuiz object to be posted to the server
    const newQuiz = Object.assign({}, this.state.newQuiz);
    fetch('http://localhost:8080/quiz', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(newQuiz)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      // We go to the confirm view
      browserHistory.push('/confirm');
    });
  }
  // We make sure to keep the state up-to-date to the latest input values
  setQuiz (res) {
    console.log(e.target.value);
    const newQuiz = res
    this.setState({ newQuiz });
  }
  render () {
    return <Quiz submit={this.submit} setQuiz={this.setQuiz} />
  }
}
