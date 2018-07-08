import React, { Component } from 'react';
// import Moment from 'react-moment';
import {NewRow} from "./newRow";
import {PopUp} from "./popUp";


class MainTable extends Component{
    constructor(props){
        super (props);
        this.state = {
            table1: [],
            popUpStatus: false,
            rate: "",
            checkbox: false
        }
    };
    //
    componentDidMount (){
        let year = Number(this.props.chosenYear);
        let month = Number(this.props.chosenMonth);
        const daysInMonth = new Date(year, month, 0).getDate();
        let result = [];


        for (let i = 1; i <= daysInMonth; i++) {
            const day = new Date(year, month - 1, i);
            // if (this.state.checkbox1 === true && day.getDay() == 6) {
            //     alert("działa");
            //     continue;
            // }
            //
            // if (this.state.checkbox2 === true && (day.getDay() == 5 || day.getDay() == 6)) {
            //     continue;
            // }

            result.push(day);
        }

        this.setState({
            table1: result
        });
    };

    //  showing PopUP - adding new route to table
    showPopUp = (index) => {
        this.setState ({
            popUpStatus: true,
            currentIndex: index,
        });
    };
    // closing PopUp and confirm data to add
    hidePopUp = () => {
        this.setState({
           popUpStatus: false
        })
    };
    // removing day from table
    removeDay = (i) => {
        let removedTable = this.state.table1;
        removedTable.splice(i, 1);
        this.setState ({
            table1: removedTable
        })
    };
    // adding new day in table/ cloning date
    addNewRow = (a, b, c, d) => {
        let addedTable = this.state.table1;
       addedTable.splice(this.state.currentIndex+1, 0, <NewRow select={c} capacity={this.props.capacity} km={d} remove={this.removeDay} el={this.state.table1[this.state.currentIndex]} homePoint={a} workPoint={b}  showPopUp={this.showPopUp}/>);
        this.setState ({
            tabel1: addedTable
        });
    };

    //function removing weekends from table
    removeSunday =()=> {
        let removedSundayTable = [];
        let year = Number(this.props.chosenYear);
        let month = Number(this.props.chosenMonth);
        const daysInMonth = new Date(year, month, 0).getDate();

        for (let i = 1; i <= daysInMonth; i++) {
            const day = new Date(year, month - 1, i);
            if (this.state.checkbox === false && day.getDay() === 0) {
                continue;
            }
            if (this.state.checkbox === false && day.getDay() === 6) {
                continue;
            }
            removedSundayTable.push(day);
        }
        this.setState({
            table1: removedSundayTable
        });
    };

    checkbox = () => {
        if (this.state.checkbox == false) {
            this.setState({
                checkbox: true
            });
            console.log(this.state.checkbox)
        } else {
            this.setState({
                checkbox: false
            });
            console.log(this.state.checkbox)
        }
        this.removeSunday();



    };


    render(){
        let rate = "";
        if(this.props.capacity == 0) {
            rate = 0.5214;
        } else {
            rate = 0.8358
        }
        let kms = 0;
        let wartsum = 0;
        let calendar = this.state.table1.map((el, index)=>{
            if (typeof el.props === 'undefined') {
                kms += Number(this.props.km);
                wartsum += Number((this.props.km * rate ).toFixed(2));
                return <NewRow select={this.props.select} addNewRow={this.addNewRow} capacity={this.props.capacity} km={this.props.km}
                               remove={this.removeDay} index={index} el={el} homePoint={this.props.homePoint}
                               workPoint={this.props.workPoint} showPopUp={this.showPopUp}/>
            } else {
                kms += Number(el.props.km);
                wartsum += Number((el.props.km * rate ).toFixed(2));
                return el;
            }
        });
        return (
                <div className="mainTable container">
                    <div>
                        <section className="printHeader">
                            <div>
                            </div>
                        </section>
                    </div>
                    <div className="table">
                        <section className="weekends">
                            <div>
                                Usuń weekendy
                                <br/>
                                <input onChange={this.checkbox} id="removeSundays" type="checkbox" checked={this.props.checkbox1}/>
                            </div>

                        </section>

                        <table>
                            <tbody>
                            <tr>
                                <th>Data</th>
                                <th>Dzień tygodnia</th>
                                <th>Trasa</th>
                                <th>Cel wyjazdy</th>
                                <th>Ilość km</th>
                                <th>Stawka/km</th>
                                <th>Wartość</th>
                                <th>Uwagi</th>
                                <th>Opcje</th>
                            </tr>
                            {calendar}
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Razem kilometrów</th>
                                <th>{kms} km</th>
                                <th>Razem Wartość</th>
                                <th>{(wartsum).toFixed(2)} zł</th>
                                <th></th>
                                <th></th>
                            </tr>
                            </tbody>
                        </table>
                        {this.state.popUpStatus === true && <PopUp getPoints={this.getPoints} addNewRow={this.addNewRow} hidePopUp={this.hidePopUp}/>}
                    </div>
                </div>
        )
    }
};

export {MainTable}