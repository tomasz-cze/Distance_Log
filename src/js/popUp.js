import React, { Component } from 'react';

class PopUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            display: true
        }
    }
    hide = () => {
        this.setState({
            display: false
        })
    };
    render(){
        return (
            <div style={{display: this.state.display === true ? "block" : "none", width: "1000px", height: "1000px", position: "absolute", backgroundColor: "black"}} className="popBackground">
                <div className="popUp">
                    <input></input>
                    <input></input>
                    <select>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                    <map></map>
                    <button onClick={this.hide}>Dodaj trasę</button>
                </div>
            </div>
        )
    }
}

export {PopUp}