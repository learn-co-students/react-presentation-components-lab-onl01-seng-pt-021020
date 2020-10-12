import React, {Component} from 'react'

export default class SimpleComponent extends Component{

  state = {
    mood: 'happy'
  }
  
  handleClick = () => {
    this.setState(previousState =>{
      return {
        mood: previousState.mood === 'happy'? previousState.mood = 'sad' : previousState.mood = 'happy'
      }
    })
  }

  render(){
    return(
    <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
