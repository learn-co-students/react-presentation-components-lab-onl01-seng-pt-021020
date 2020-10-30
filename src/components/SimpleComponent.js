import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    constructor(props){
    super(props)

    this.state = {
        mood: 'happy'
    }
}

    handleClick = () => {
        const newMood = this.state.mood === 'happy'? 'sad' : 'happy';
        this.setState({mood: newMood})
        if(this.state.mood === 'happy'){
            document.body.style.background = 'purple'
        }
        else{
            document.body.style.background = 'green'
        }
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}
