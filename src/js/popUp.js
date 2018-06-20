import React, { Component } from 'react';

class PopUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            display: block
        }
    }

    hide = () => {
        this.setState({
            display: "none"
        })
    }

    render(){
        return (
            <div style={{display: this.state.display}} className="popBackground">
                <div className="popUp">
                    <input></input>
                    <input></input>
                    <select></select>
                    <map></map>
                    <button onClick={this.hide}>Dodaj trasę</button>
                </div>
            </div>
        )
    }
}

export {PopUp}