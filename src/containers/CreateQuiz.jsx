import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Quiz } from '../components';

let score = 0;

export default class CreateQuiz extends Component {
  constructor (props) {
    super(props);
    // Initial state
    this.state = {
        q1:'',
        q2:'',
        q3:'',
        score: 0
    };

    // Bind this (context) to the functions to be passed down to the children components
    this.submit = this.submit.bind(this);
    this.setQuiz1 = this.setQuiz1.bind(this);
    this.setQuiz2 = this.setQuiz2.bind(this);
    this.setQuiz3 = this.setQuiz3.bind(this);
  }
  submit (event) {
    event.preventDefault();
    // We create the newQuiz object to be posted to the server
    const newQuiz = Object.assign({}, {
      'response1': this.state.q1,
      'response2': this.state.q2,
      'response3': this.state.q3,
      'score': this.state.score
    });
    fetch('http://localhost:8080/quiz', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(newQuiz)
    })
    .then(response => {
      if(response.status === 200) {
        localStorage.setItem('score', this.state.score);
        browserHistory.push('/confirm');
      }
    });
  }

  // We make sure to keep the state up-to-date to the latest input values
  setQuiz1 (event) {
    const q1 = ~~event.target.value
    if(q1 === 2) {
      score++;
    }
    this.setState({ q1, score });
  }
  setQuiz2 (event) {
    const q2 = ~~event.target.value
    if(q2 === 1) {
      score++;
    }
    this.setState({ q2, score });
  }
  setQuiz3 (event) {
    const q3 = ~~event.target.value
    if(q3 === 1) {
      score++;
    }
    this.setState({ q3, score });
  }

  render () {
    return <Quiz submit={this.submit} setQuiz1={this.setQuiz1} setQuiz2={this.setQuiz2} setQuiz3={this.setQuiz3} />
  }
}
