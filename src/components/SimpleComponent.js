import React, { Component } from 'react'

class SimpleComponent extends Component {
    state = {
        mood: 'happy'
    }

    clickHandler = e => {
        this.setState({
            mood: 'sad'
        })
    }

    render() {
        return (
            <div onClick={this.clickHandler}>{this.state.mood}</div>
        )
    }
}

export default SimpleComponent
