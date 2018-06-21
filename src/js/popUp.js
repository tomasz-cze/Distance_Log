import React, { Component } from 'react';
import {NewRow} from "./newRow";

class PopUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            display: true,
            pointA: "",
            pointB: "",
            selectedType: ""
        }
    }
    close = () => {
        this.props.hidePopUp();
        this.props.addNewRow(this.state.pointA, this.state.pointB, this.state.selectedType);

    };

    changePosition = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    };




    render(){
        return (
            <div className="popBackground">
                <div className="popUp">

                    <input id="pointA" onChange={event => this.changePosition (event)} placeholder="Punkt startowy" value={this.state.pointA}></input>
                    <input id="pointB" onChange={event => this.changePosition (event)} placeholder="Punkt docelowy" value={this.state.pointB}></input>
                    <select id="selectedType" onChange={event => this.changePosition (event)} value={this.state.selectedType}>
                        <option>Dojazd do klienta</option>
                        <option>Transport towaru</option>
                        <option>Inne</option>

                    </select>
                    <map></map>
                    <br/>
                        <br/>
                    <button onClick={this.close}>Dodaj trasę</button>
                </div>
            </div>
        )
    }
}

export {PopUp}