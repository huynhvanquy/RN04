import React, { Component } from 'react'
import LoginUI from './LoginUI';
import RegisterUI from './RegisterUI';

export default class LoginScreen extends Component {
    state = {
        isShowLoginForm: true
    };

    navigate = () => this.setState({isShowLoginForm: !this.state.isShowLoginForm});

  render() {
      const {isShowLoginForm} = this.state;
    return (
        <>
        { isShowLoginForm ? 
        (<LoginUI navigate={this.navigate} />) : 
        (<RegisterUI navigate={this.navigate} />) }
        </>
    )
  }
}