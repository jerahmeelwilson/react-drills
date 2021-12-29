
import './App.css';
import React, { Component } from 'react';
//import Todo from './components/Todo';
import List from './components/List';
import NewTask from './components/NewTask';
export default class App extends Component {
  constructor(){
    super();

    this.state = {
      inputValue:"",
      taskList:[],
    }
    this.handleInput = this.handleInput.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  
  handleInput(event){
    this.setState({inputValue:event.target.value})
  }
  addTask(){
    let newTaskList = this.state.taskList;
    newTaskList.push(this.state.inputValue);
    this.setState({taskList:newTaskList});
    console.log(this.state.taskList);
  }

  render() {
    return (
      <div className='App' >
        <h1>My to-do list:</h1>
        <NewTask handleInput={this.handleInput} addTask={this.addTask}></NewTask>
        <List taskList={this.state.taskList}></List>
      </div>
    )
  }
}

