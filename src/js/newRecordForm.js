import React, { Component } from 'react';

class NewRecordForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            choseMonth: "",
            choseYear: "",
            homePoint: "",
            workPoint: ""
        }
    }
    render(){
        return (
            <div className="newRecordForm container">
                <span>Stworz nową kilometrówkę</span>
                <div>
                    <div>
                        Wybierz miesiąc
                        <select onChange={event => this.choseMonth(event)} value={this.state.choseMonth}>
                            <option>Styczeń</option>
                            <option>Luty</option>
                            <option>Marzec</option>
                            <option>Kwiecień</option>
                            <option>Maj</option>
                            <option>Czerwiec</option>
                            <option>Lipiec</option>
                            <option>Sierpień</option>
                            <option>Wrzesień</option>
                            <option>Październik</option>
                            <option>Listopad</option>
                            <option>Grudzień</option>
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
                <div className="homeOffice">
                    <div>Wybierz trasę z domu do pracy - automatycznie uzupełni każdy dzień miesiąca i będziesz mógł to edytować.</div>
                    <div>
                        <input type="text" placeholder="Dom" value={this.state.homePoint}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Praca" value={this.state.workPoint}/>
                    </div>
                </div>

            </div>
        )
    }
}

export {NewRecordForm}