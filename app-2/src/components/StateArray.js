import './StateArray.css';
import React, { Component } from 'react'

export default class StateArray extends Component {
    constructor(props){
        super(props);
        this.state ={
            list: this.props.list
        }
    }
    
    render() {
        let displayList = this.props.list.map((item,index) => {
            return <h2 key={index}>{item}</h2>
        } )
        return (
            <div className='array_list'>
                {displayList}
            </div>
        )
    }
}



// import React,{useState} from 'react';
// export default function StateArray(props) {
//     const [list, setList] = useState(props.list)

//     let displayList = list.map((item,index)  =>{
//         return <h2 key={index}>{item}</h2>;
//     });
    
//     return (
//         <div className="array_list">
//             {displayList}
//         </div>
//     )
// }
