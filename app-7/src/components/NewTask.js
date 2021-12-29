import React, { Component } from 'react'

export default class NewTask extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.handleInput}></input>
                <button onClick={this.props.addTask}>Add</button>
            </div>
        )
    }
}
