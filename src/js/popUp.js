import React, { Component } from 'react';

class PopUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            display: true,
            pointA: "",
            pointB: ""
        }
    }
    close = () => {
        this.props.hidePopUp()
    };


    render(){
        return (
            <div className="popBackground">
                <div className="popUp">

                    <input onChange={event => this.changePop (event)} placeholder="Punkt startowy"></input>
                    <input onChange={event => this.changePop (event)} placeholder="Punkt docelowy"></input>
                    <select>
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