import React, { Component } from 'react';
import {Header} from "./js/header";
import {CompanyForm} from "./js/companyForm";
import {NewRecordForm} from "./js/newRecordForm";
import {Footer} from "./js/footer";
import {Instruction} from "./js/Instruction";
import "./scss/main.css";
import {MyMapComponent} from "./js/map";






class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            companyName: "",
            capacity: "",
            distance: "",
            pointA: "",
            pointB: ""
        }
    };

    getData =(a)=> {
        this.setState ({
            companyName: a
        })
    };

    giveCapacity = (e) => {
        this.setState ({
            capacity: e
        })
    };

    getDistance = (e) => {
        this.setState ({
            distance: e
        })
    };

    getPointA =(e)=> {
        this.setState ({
            pointA: e
        })
    };
    getPointB =(e)=> {
        this.setState ({
            pointB: e
        })
    };


    render() {

        return (
            <div>
                <div className="background">
                    <Header></Header>
                    <Instruction></Instruction>
                    <CompanyForm
                        getData={this.getData}
                        giveCapacity={this.giveCapacity}
                        getDistance={this.getDistance}
                        getPointA={this.getPointA}
                        getPointB={this.getPointB}>

                    </CompanyForm>
                    <NewRecordForm
                        a={this.state.a}
                        capacity={this.state.capacity}
                        km={this.state.distance}
                        homePoint={this.state.pointA}
                        workPoint={this.state.pointB}
                    >
                    </NewRecordForm>
                </div>
                <div>


                    {/*<MyMapComponent*/}
                    {/*markerA={this.state.searchBoxA}*/}
                    {/*markerB={this.state.searchBoxB}*/}
                    {/*loadingElement={<div style={{height: `100%`}}/>}*/}
                    {/*containerElement={<div style={{height: `400px`}}/>}*/}
                    {/*mapElement={<div style={{height: `100%`}}/>}*/}
                    {/*/>*/}
                </div>

                <Footer></Footer>
            </div>
        );
    }
}

export default App;
