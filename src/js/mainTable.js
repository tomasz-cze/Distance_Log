import React, { Component } from 'react';

class MainTable extends Component{
    render(){
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