import React, { Component } from 'react';
import {NewRow} from "./newRow";

class PopUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            display: true,
            pointA: "",
            pointB: "",
            selectedType: "",
            distance: "",
            checkbox: false,
            distanceGo: ""
        }
    }
    close = () => {


        this.props.addNewRow(this.state.pointA, this.state.pointB, this.state.selectedType, this.state.distance);
        this.props.hidePopUp();

        console.log( this.state.distance );
        console.log( this.state.checkbox )
    };

    changePosition = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    };

    checkBox = () => {
        this.setState ({
            checkbox: this.state.checkbox === true ? false : true
        })
    };




    render(){
        return (
            <div className="popBackground">
                <div className="popUp">

                    <input class="w3-input" type="text" id="pointA" onChange={event => this.changePosition (event)} placeholder="Punkt startowy" value={this.state.pointA}></input><br/><br/>
                    <input type="text" id="pointB" onChange={event => this.changePosition (event)} placeholder="Punkt docelowy" value={this.state.pointB}></input><br/><br/>
                    <input type="number" id="distance" onChange={event => this.changePosition (event)} placeholder="Ilość km" value={this.state.distance}></input><br/>
                    Uwzględnij drogę powrotną
                    <input type="checkbox" id="checkbox" onClick={this.checkBox} placeholder="Uwzględnij drogę powrotną" value={this.state.checkbox}></input><br/>
                    <br/>
                    <br/>
                    <select id="selectedType" onChange={event => this.changePosition (event)} value={this.state.selectedType}>
                        <option>Dojazd do klienta</option>
                        <option>Transport towaru</option>
                        <option>Inne</option>

                    </select><br/><br/>
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