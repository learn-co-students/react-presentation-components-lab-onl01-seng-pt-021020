// Code SimpleComponent Here

import React from 'react';

class SimpleComponent extends React.Component {
    
    state= {
        mood: 'happy'
    }

    handleClick = () =>{
        if (this.state.mood === 'sad') {
            this.setState({
                mood: 'happy'
            })
        } else {
            this.setState({
                mood: 'sad'
            })
        }
    }

    render(){
        return <div onClick={this.handleClick}>
            {this.state.mood}
        </div>
    }
}

export default SimpleComponent