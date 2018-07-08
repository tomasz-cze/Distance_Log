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
            capacity: "",
            routeLength: "",
            pointA: "",
            pointB: ""
        }
    };

    giveCapacity = (e) => {
        this.setState ({
            capacity: e
        })
    };

    giveRouteLength = (e) => {
        this.setState ({
            routeLength: e
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
                    giveCapacity={this.giveCapacity}
                    routeLength={this.giveRouteLength}
                    getPointA={this.getPointA}
                    getPointB={this.getPointB}>

                </CompanyForm>
                <NewRecordForm
                    capacity={this.state.capacity}
                    km={this.state.routeLength}
                    homePoint={this.state.pointA}
                    workPoint={this.state.pointB}
                >
                </NewRecordForm>
            </div>
            <div>


                <MyMapComponent
                    markerA={this.state.searchBoxA}
                    markerB={this.state.searchBoxB}
                    loadingElement={<div style={{height: `100%`}}/>}
                    containerElement={<div style={{height: `400px`}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                />
            </div>

            <Footer></Footer>
        </div>
    );
  }
}

export default App;
