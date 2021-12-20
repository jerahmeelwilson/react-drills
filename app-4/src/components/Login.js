import React,{useState} from "react";
import './Login.css'
export default function Login() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   function handleUsername(event){
       setUsername(event.target.value)
   }
   
   function handlePassword(event){
       setPassword(event.target.value)
   }

   function loginUser(event){
       event.preventDefault()
       alert(`Username: ${username} Password: ${password}`)
   }

  return (
    <form action="#" className="login" onSubmit={loginUser}>
      <input required onChange={handleUsername} placeholder="Username" />
      <input
        required
        onChange={handlePassword}
        placeholder="Password"
        type="password"
      />
      <button>Login</button>
    </form>
  );
}

// import React, { Component } from 'react'
// import './Login.css'
// export default class Login extends Component {
//     constructor(){
//         super()
//         this.state ={
//             username:"",
//             password:""
//         }
//         this.loginUser = this.loginUser.bind(this)
//         this.handlePassword = this.handlePassword.bind(this)
//         this.handleUsername = this.handleUsername.bind(this)
//     }
//     loginUser(event){
//         event.preventDefault();
//         alert(`Username: ${this.state.username} Password: ${this.state.password}`)
//     }
//     handleUsername(event){
//         this.setState({username:event.target.value})
//     }
//     handlePassword(event){
//         this.setState({password:event.target.value});
//     }

//     render() {
//         return (
//             <form action="#" className='login' onSubmit={this.loginUser}>
//                 <input required onChange={this.handleUsername}placeholder='Username'/>
//                 <input required onChange={this.handlePassword}placeholder='Password' type="password"/>
//                 <button>Login</button>
//             </form>
//         )
//     }
// }
