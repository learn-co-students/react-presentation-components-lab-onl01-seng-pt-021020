import React, { Component } from 'react'

export class SimpleComponent extends Component {
  state = {
    mood: 'happy'
  }

  handleClick = () => {
    this.setState(prev => ({
      mood: prev.mood === 'happy' ? 'sad' : 'happy'
    }));
  }

  render() {
  return <div onClick={this.handleClick} >{this.state.mood}</div>
  }
}

export default SimpleComponent
