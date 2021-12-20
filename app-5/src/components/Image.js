import React from "react";
import './Image.css'
export default function Image(props) {
  return (
    <div className="image">
      <img src={props.url} alt="react"></img>
    </div>
  );
}

// import React, { Component } from 'react'
// import './Image.css'
// export default class Image extends Component {
//     // eslint-disable-next-line no-useless-constructor
//     constructor(props){
//         super(props);
//     }
//     render() {
//         console.log(this.props);
//         return (
//             <div className='image'>
//                 <img src={this.props.url} alt='react'></img>
//             </div>
//         )
//     }
// }
