import React, {useState}from 'react'

export default function Reflection() {
    const [userInput, setUserInput] = useState("")

    function displayInput(event){
        setUserInput(event.target.value)
    }
    
    return (
        <div>
            <input onChange={displayInput}value={userInput}></input>
            <p>{userInput}</p>
        </div>
    )
}
