import React, { Component } from 'react';
// import Moment from 'react-moment';
import {NewRow} from "./newRow";


class MainTable extends Component{
    constructor(props){
        super (props);
        this.state = {
            table1: []
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

    removeDay = (i) => {
        let removedTable = this.state.table1;
        removedTable.splice(i, 1);
        this.setState ({
            table1: removedTable
        })
    };

    render(){
        let calendar = this.state.table1.map((el, index)=>{
            return <NewRow capacity={this.props.capacity} km={this.props.km} remove={this.removeDay} index={index} el={el} homePoint={this.props.homePoint} workPoint={this.props.workPoint}/>
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
                                <th style={{width: "400px"}}>Trasa</th>
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
                    </div>
                </div>

        )
    }
}

export {MainTable}