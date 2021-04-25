import React, {Component} from 'react';

class SayHiClass extends React.Component {
    
    handleClick = () => {
        setTimeout(this.showAlert, 4000)
    }

    showAlert = () => {
        alert(`Hello ${this.props.name}`)
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Say hi with class
            </button>
        );
    }

}

export default SayHiClass;