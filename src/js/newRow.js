import React, { Component } from 'react';
import Moment from 'react-moment';

class NewRow extends Component {


    remove = (event) => {
        this.props.remove(event)
    };

    render() {

        let el= this.props.el;
        let index = this.props.index;
        let homePoint = this.props.homePoint;
        let workPoint = this.props.workPoint;
        // let rate = "";
        // if(this.props.capacity === 0) {
        //     rate = Number("0,5214");
        //     return rate
        // } else {
        //     rate = Number("0,8358");
        //         return rate
        // }
        // console.log( rate )

        return (
            <tr key={index}>
                <td key={index+"a"}>{el.getDate()}</td>
                <td key={index+"b"}><Moment format="dddd">{el}</Moment></td>
                <td key={index+"c"}>{homePoint}-{workPoint}, {workPoint}-{homePoint}</td>
                <td key={index+"d"}>Dojazd do pracy</td>
                <td key={index+"e"}>{this.props.km}</td>
                <td key={index+"f"}>{this.props.km * 3 }</td>
                <td key={index+"g"}></td>
                <td key={index+"h"}></td>
                <td key={index+"i"}>
                    <button>Dodaj trasę</button>
                    <button onClick={element => this.remove(index)}>Usuń</button>
                </td>
            </tr>
        )


    }
}


export {NewRow}