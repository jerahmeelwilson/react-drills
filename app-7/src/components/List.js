import React, { Component } from 'react'
import Todo from './Todo'
export default class List extends Component {
    render() {
        return (
            <div>
                {this.props.taskList.map((task,index) => {
                    return <Todo task={task} key={index}></Todo>
                })}
            </div>
        )
    }
}
