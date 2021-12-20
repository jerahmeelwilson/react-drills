import React, { Component } from "react";

export default class Reflection extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inputValue:""
    }
    this.displayInput = this.displayInput.bind(this);
  }

  displayInput(event){
      this.setState({inputValue:event.target.value})
  }

  render() {
    return (
      <div>
        <input onChange={this.displayInput}></input>
        <p>{this.state.inputValue}</p>
      </div>
    );
  }
}

// import React, {useState}from 'react'

// export default function Reflection() {
//     const [userInput, setUserInput] = useState("")

//     function displayInput(event){
//         setUserInput(event.target.value)
//     }

//     return (
//         <div>
//             <input onChange={displayInput}></input>
//             <p>{userInput}</p>
//         </div>
//     )
// }
