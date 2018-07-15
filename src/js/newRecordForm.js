import React, { Component } from 'react';
import {MainTable} from "./mainTable";

class NewRecordForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            chosenMonth: "",
            chosenYear: "",
            btn: false,
            select: "",
            distance: ""
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
        });

    };


    create = () => {
        this.setState ({
            btn: true,
        });

    };
    changeSelect = (event) => {
        this.setState ({
            select: event.target.value
        })
    };
    render(){
        return (
            <div className="newRecordForm container">
                <div className="boxTableData" >
                    <div className="calendar">
                        <div><br/>
                            Wybierz miesiąc <br/>
                            <select onChange={event => this.choseMonth(event)} value={this.state.choseMonth}>
                                <option value={0}></option>
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
                        <div><br/>
                            Wybierz rok<br/>
                            <select onChange={event => this.choseYear(event)} value={this.state.choseYear}>
                                <option></option>
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
                <div className="photo3"/>
                <div className="createKM">
                    <button className="button" onClick={this.create}>Stwórz KILOMETRÓWKĘ</button>
                </div>
                {this.state.btn === true && <MainTable select={this.state.select} capacity={this.props.capacity} km={this.props.km} workPoint={this.props.workPoint} homePoint={this.props.homePoint} chosenMonth={this.state.chosenMonth} chosenYear={this.state.chosenYear}/>}
            </div>
        )
    }
}

export {NewRecordForm}