import React, { Component } from 'react';
import Moment from 'react-moment';


class MainTable extends Component{
    // constructor(props){
    //     super (props);
    //     this.state = {
    //         date: ""
    //     }
    // }
    render(){
        let year = Number(this.props.chosenYear);
        let month = Number(this.props.chosenMonth);
        const daysInMonth = new Date(year, month, 0).getDate();
        let result = [];
        for (let i = 1; i <= daysInMonth; i++) {
            const day = new Date(year, month - 1, i);

            result.push({day});
        }
        console.log( this.props.chosenMonth );
        console.log( this.props.chosenYear );
        console.log( result);
        return (
            <div className="mainTable container">
                <div>
                    <div className="printHeader"></div>
                </div>
                <div className="table">
                    <table>
                        <tbody>
                            <tr>
                                <th>LP.</th>
                                <th>Data</th>
                                <th>Dzień tygodnia (niewidoczny przy druku)</th>
                                <th>Trasa</th>
                                <th>Cel wyjazdy</th>
                                <th>Ilość km</th>
                                <th>Stawka/km</th>
                                <th>Wartość</th>
                                <th>Uwagi</th>
                                <th>Opcje</th>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export {MainTable}