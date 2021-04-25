import React from 'react'
import './style.css'
function SayHiFunction({name}) {

    const handleClick = () => {
        setTimeout(showAlert, 4000);
    } 

    const showAlert = () => {
        alert(`Hello ${name}`);
    }

    return (
        <div>
            <label>
                <button onClick={handleClick}>Say Hi with function</button>
            </label>
        </div>
    )
}

export default SayHiFunction
