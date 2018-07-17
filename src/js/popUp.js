import React, {Component} from 'react';
import {NewRow} from "./newRow";

const {StandaloneSearchBox} = require("react-google-maps/lib/components/places/StandaloneSearchBox");

class PopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            searchBoxA: false,
            searchBoxB: false,
            selectedType: "",
            distance: "",
            checkbox: false,
            distanceGo: "",
            pointA: "",
            pointB: ""
        }
    }

    // function from google.maps to put points into intputs

    componentWillMount() {
        this.refs = {
            searchBoxA: null,
            searchBoxB: null
        };
    };

    onSearchBoxMounted = (ref, searchBox) => {
        this.refs[searchBox] = ref;
    };

    onPlacesChanged = (searchBox) => {
        const places = this.refs[searchBox].getPlaces();

        this.setState({
            [searchBox]: places
        })
    };

    //function closing popUp and sending data to table

    close = () => {
        this.props.addNewRow(this.state.pointA, this.state.pointB, this.state.selectedType, this.state.distance);
        this.props.hidePopUp();
        this.getDist()
    };

    changePosition = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };

    checkBox = () => {
        this.setState({
            checkbox: this.state.checkbox === true ? false : true
        })
    };

    // function to get to aprent name of points
    changeA = (event) => {
        // this.props.getPointA(event.target.value);
        this.setState({
            pointA: event.target.value
        })
    };
    changeB = (event) => {
        // this.props.getPointB(event.target.value);
        this.setState({
            pointB: event.target.value
        })
    };

    // function to get distance from google maps


    getDist(dest) {
        const wrappedCallback = (...args) => this.callback(...args);
        var self = this;
        var origin = this.state.pointA,
            destination = this.state.pointB,
            service = new window.google.maps.DistanceMatrixService();

        service.getDistanceMatrix(
            {
                origins: [origin],
                destinations: [destination],
                travelMode: window.google.maps.TravelMode.DRIVING,
                avoidHighways: true,
                avoidTolls: true,
                unitSystem: window.google.maps.UnitSystem.METRIC
            },
            wrappedCallback
        );
    }

    callback(response, status) {
        const self = this;
        if (status === "OK") {
            console.log(response);
            var dest = response.destinationAddresses[0];
            var dist = response.rows[0].elements[0].distance.text;
            self.setState({
                distance: dist
            });
            return response;
        } else {
            alert("Error: " + status);
        }
    }

    calculateDistance = () => {
        this.getDist();

    };

    render() {
        return (
            <div className="popBackground">
                <div className="popUp">
                    <StandaloneSearchBox
                        ref={ref => this.onSearchBoxMounted(ref, 'searchBoxA')}
                        onPlacesChanged={() => this.onPlacesChanged('searchBoxA')}>
                        <input
                            type="text"
                            placeholder="Punkt A"
                            onChange={e => this.changeA(e)}
                        />
                    </StandaloneSearchBox><br/>
                    <StandaloneSearchBox
                        ref={ref => this.onSearchBoxMounted(ref, 'searchBoxB')}
                        onPlacesChanged={() => this.onPlacesChanged('searchBoxB')}>
                        <input
                            type="text"
                            placeholder="Punkt B"
                            onChange={e => this.changeB(e)}
                        />
                    </StandaloneSearchBox>
                    <div>
                        <button onClick={this.calculateDistance}>Oblicz trasę</button>
                    </div>

                    <br/>

                    <input onChange={e => this.changePosition(e)}
                           type="text"
                           placeholder="ilość km"
                           value={this.state.distance.slice(0, -3)}
                           disabled/>
                    <br/>
                    Uwzględnij drogę powrotną<br/>
                    <input type="checkbox"
                           id="checkbox"
                           onClick={this.checkBox}
                           placeholder="Uwzględnij drogę powrotną"
                           value={this.state.checkbox}></input><br/>

                    Cel wyjazdu
                    <select id="selectedType" onChange={event => this.changePosition(event)}
                            value={this.state.selectedType}>
                        <option>Dojazd do klienta</option>
                        <option>Transport towaru</option>
                        <option>Inne</option>

                    </select><br/>
                    <br/>

                    <button onClick={this.close}>Dodaj trasę</button>
                </div>
            </div>
        )
    }
}

export {PopUp}