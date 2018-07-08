import React, { Component } from 'react';
import Moment from 'react-moment';

class NewRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ""
        }
    }

    changeText = (e) => {
        this.setState ({
            text: e.target.value
        })
    };
    add = (index, el) => {
        this.props.showPopUp(index, el);

    };


    remove = (event) => {
        this.props.remove(event)
    };

    render() {
        console.log( this.props.capacity );
        let el= this.props.el;
        let index = this.props.index;
        let homePoint = this.props.homePoint;
        let workPoint = this.props.workPoint;
        let rate = "";
        if(this.props.capacity == 0) {
            rate = 0.5214;
        } else {
            rate = 0.8358
        }
        return (
            <tr height="20px"  key={index}>
                <td key={index+"a"}><Moment format="D">{el}</Moment></td>
                <td className="dayOfWeek" key={index+"b"}><Moment format="dddd">{el}</Moment></td>
                <td key={index+"c"}>{homePoint}-{workPoint}, {workPoint}-{homePoint}</td>
                <td key={index+"d"}>{this.props.select}</td>
                <td key={index+"e"}>{this.props.km}</td>
                <td key={index+"f"}>{rate}</td>
                <td key={index+"g"}>{(this.props.km * rate ).toFixed(2)}</td>
                <td key={index+"h"}><textarea onChage={e => this.changeText(e)} value={this.state.text}></textarea></td>
                <td key={index+"i"}>
                    <button onClick={element => this.add(index, el)}>Dodaj trasę</button>
                    <button onClick={element => this.remove(index)}>Usuń</button>
                </td>
            </tr>
        )
    }
}

export {NewRow}