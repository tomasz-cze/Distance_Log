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
        }
    }

    componentDidMount (){
        let year = Number(this.props.chosenYear);
        let month = Number(this.props.chosenMonth);
        const daysInMonth = new Date(year, month, 0).getDate();
        let result = [];

        for (let i = 1; i <= daysInMonth; i++) {
            const day = new Date(year, month - 1, i);
            result.push(day);
        }

        this.setState({
            table1: result
        });
    }
    showPopUp = (index) => {
        this.setState ({
            popUpStatus: true,
            currentIndex: index,
        });
    };
    hidePopUp = () => {
        this.setState({
           popUpStatus: false
        })
    };
    // getPoints = (a, b) => {
    //     this.setState ({
    //         currentPointA: a,
    //         currentPointB: b
    //     })
    // };

    removeDay = (i) => {
        let removedTable = this.state.table1;
        removedTable.splice(i, 1);
        this.setState ({
            table1: removedTable
        })
    };

    addNewRow = (a, b, c) => {
        let addedTable = this.state.table1;
       addedTable.splice(this.state.currentIndex+1, 0, <NewRow select={c} capacity={this.props.capacity} km={this.props.km} remove={this.removeDay} el={this.state.table1[this.state.currentIndex]} homePoint={a} workPoint={b}  showPopUp={this.showPopUp}/>);
        this.setState ({
            tabel1: addedTable
        });
        console.log( this.state.currentPointA )
    };

    render(){
        let calendar = this.state.table1.map((el, index)=>{
            if (typeof el.props === 'undefined') {
                return <NewRow select={this.props.select} addNewRow={this.addNewRow} capacity={this.props.capacity} km={this.props.km}
                               remove={this.removeDay} index={index} el={el} homePoint={this.props.homePoint}
                               workPoint={this.props.workPoint} showPopUp={this.showPopUp}/>
            } else {
                return el;
            }
        });
        return (
                <div className="mainTable container">
                    <div>
                        <div className="printHeader"></div>
                    </div>
                    <div className="table">
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
                            </tbody>
                        </table>
                        {this.state.popUpStatus === true && <PopUp getPoints={this.getPoints} addNewRow={this.addNewRow} hidePopUp={this.hidePopUp}/>}
                    </div>
                </div>
        )
    }
}

export {MainTable}