import React,{useState, useEffect} from 'react';
import './StateArray.css';
export default function StateArray(props) {
    const [list, setList] = useState(props.list)
    const [filter, setFilter] = useState("");
    
    function handleInput(event){
        setFilter(event.target.value);
    }

    
    useEffect(() => {
        setList(props.list.filter(item => item.includes(filter)));   
    }, [filter])


    return (
        <div className="array_list">
            <input onChange={handleInput}></input>
            {list.map((item,index) =>{
                return <h2 key={index}>{item}</h2>
            })}
        </div>
    )
}










// import './StateArray.css';
// import React, { Component } from 'react'

// export default class StateArray extends Component {
//     constructor(props){
//         super(props);
//         this.state ={
//             list: this.props.list,
//             inputValue: ""
//         }
//         this.handleInput = this.handleInput.bind(this);
//     }

    
//     handleInput(event){
//         this.setState({inputValue:event.target.value});
//     }

    
//     render() {
//         let displayList = this.state.list.filter((item,index) => {
//             return item.includes(this.state.inputValue);
//         })
//         .map((item, index) =>{
//             return <h2 key={index}>{item}</h2>
//         })
//         return (
//             <div className='array_list'>
//                 <input onChange={this.handleInput}/>
//                 {displayList}
//             </div>
//         )
//     }
// }




