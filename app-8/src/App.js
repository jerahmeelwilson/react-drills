import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
export default function App() {
  const [yoda, setYoda] = useState("");

  useEffect(() => {
    console.log("mounted");
    axios
      .get("https://swapi.dev/api/people/?search=yoda")
      .then((res) => {
        console.log(res.data.results[0]);
        setYoda(res.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h2>Name: {yoda.name}</h2>
      <h2>Birth Year: {yoda.birth_year}</h2>
      <h2>Height: {yoda.height}</h2>
      <h2>Eye Color: {yoda.eye_color}</h2>
    </div>
  );
}

// import React, { Component } from 'react'
// import axios from 'axios';
// import './App.css'
// export default class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       yoda:""
//     }
//   }

//   componentDidMount(){
//     axios.get("https://swapi.dev/api/people/?search=yoda")
//     .then( res => {
//       console.log(res.data.results[0])
//       this.setState({yoda: res.data.results[0]})
//     })
//     .catch( err => {
//       console.log(err)
//     })
//   }

//   render() {
//     return (
//       <div className='App'>
//         <h2>Name: {this.state.yoda.name}</h2>
//         <h2>Birth Year: {this.state.yoda.birth_year}</h2>
//         <h2>Height: {this.state.yoda.height}</h2>
//         <h2>Eye Color: {this.state.yoda.eye_color}</h2>
//       </div>
//     )
//   }
// }
