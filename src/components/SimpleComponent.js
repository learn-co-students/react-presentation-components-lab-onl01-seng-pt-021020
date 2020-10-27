// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor(props) {

    super(props);
    
    this.state = {
      mood: "happy"
    }
  }
  //The component should have a state property called mood that has a default value of happy.



  handleClick = () => {
    const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({ mood: newMood })
  }
  //The component should implement a handleClick function that can serve as a callback to the <div>'s click event.
  //When clicked, the component's mood should toggle between happy and sad states.


  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
  //The component should simply render its current mood state to the page in a div.

}

export default SimpleComponent;

//The component should be declared as a class (instance of Component) so that it can carry state.
