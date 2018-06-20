import React, { Component } from 'react';
import {MainTable} from "./mainTable";

class NewRecordForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            chosenMonth: "",
            chosenYear: "",
            homePoint: "",
            workPoint: "",
            btn: false,
            routeLength: ""
        }
    }

    choseMonth = (event) => {
        this.setState ({
            chosenMonth: event.target.value
        })
    };
    choseYear = (event) => {
        this.setState ({
            chosenYear: event.target.value
        })
    };
    changeA = (event) => {
        this.setState ({
            homePoint: event.target.value
        })
    };
    changeB = (event) => {
        this.setState ({
            workPoint: event.target.value
        })
    };
    changeC = (event) => {
        this.setState ({
            routeLength: event.target.value
        })
    };
    create = () => {
        this.setState ({
            btn: true
        })
    };
    render(){
        return (
            <div className="newRecordForm container">
                <div>
                    <h1>Stworz nową kilometrówkę</h1>
                </div>
                <div>
                    <div className="calendar">
                        <div>
                            Wybierz miesiąc
                            <select onChange={event => this.choseMonth(event)} value={this.state.choseMonth}>
                                <option value={1}>Styczeń</option>
                                <option value={2}>Luty</option>
                                <option value={3}>Marzec</option>
                                <option value={4}>Kwiecień</option>
                                <option value={5}>Maj</option>
                                <option value={6}>Czerwiec</option>
                                <option value={7}>Lipiec</option>
                                <option value={8}>Sierpień</option>
                                <option value={9}>Wrzesień</option>
                                <option value={10}>Październik</option>
                                <option value={11}>Listopad</option>
                                <option value={12}>Grudzień</option>
                            </select>
                        </div>
                        <div>
                            Wybierz rok
                            <select onChange={ event => this.choseYear(event)} value={this.state.choseYear}>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="homeOffice">
                    <div>Wybierz trasę z domu do pracy - automatycznie uzupełni każdy dzień miesiąca i będziesz mógł to edytować.</div>
                    <div>
                        <input onChange={e => this.changeA(e)} type="text" placeholder="Dom" value={this.state.homePoint}/>
                    </div>
                    <div>
                        <input onChange={e => this.changeB(e)} type="text" placeholder="Praca" value={this.state.workPoint}/>
                    </div><div>
                        <input onChange={e => this.changeC(e)} type="number" placeholder="ilość km" value={this.state.routLength}/>
                    </div>
                </div>
                <div>
                    <button onClick={this.create}>Stwórz KILOMETRÓWKĘ</button>
                </div>
                {this.state.btn === true && <MainTable capacity={this.props.capacity} km={this.state.routeLength} workPoint={this.state.workPoint} homePoint={this.state.homePoint} chosenMonth={this.state.chosenMonth} chosenYear={this.state.chosenYear}/>}
                </div>
        )
    }
}

export {NewRecordForm}