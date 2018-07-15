import React, { Component } from 'react';
const {StandaloneSearchBox} = require("react-google-maps/lib/components/places/StandaloneSearchBox");



class CompanyForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            companyName: "",
            companyStreet: "",
            companyPostCode: "",
            companyCity: "",
            companyNip: "",
            driverName: "",
            driverSurname: "",
            driverStreet: "",
            driverPostCode: "",
            driverCity: "",
            carRegistrationNumber: "",
            carCapacity: "",
            routeLength: "",
            searchBoxA: false,
            searchBoxB: false,
            distance: "",
            pointA: "",
            pointB: ""
        }
    }

    // giveDate = () => {
    //   this.props.getData(
    //         this.state.companyName,
    //         this.state.companyStreet,
    //         this.state.companyPostCode,
    //         this.state.companyCity,
    //         this.state.companyNip,
    //         this.state.driverName,
    //         this.state.driverSurname,
    //         this.state.driverStreet,
    //         this.state.driverPostCode,
    //         this.state.driverCity,
    //         this.state.carRegistrationNumber,
    //         this.state.carCapacity
    //   )
    // };


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

    // function to get to aprent name of points
    changeA = (event) => {
       this.props.getPointA(event.target.value);
        this.setState ({
            pointA: event.target.value
        })
    };
    changeB = (event) => {
       this.props.getPointB(event.target.value);
        this.setState ({
            pointB: event.target.value
        })
    };

    // changing state of car capacity
    changeCapacity = (e) => {
        this.props.giveCapacity(e.target.value)
    };

    giveDistance = (e) => {
        this.props.getDistance(this.state.distance.slice(0,-3))
    };


    // changing inputs in Company Form
    change = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    };

    // function to get distance from google maps


    getDist(dest){
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
        if(status === "OK") {
            console.log(response);
            var dest = response.destinationAddresses[0];
            var dist = response.rows[0].elements[0].distance.text;
            self.setState ({
                distance: dist
            });
            return response;
        } else {
            alert("Error: " + status);
        }
    }

    // function onlick to calculate distance and give it to parent

    calculateDistance = () => {
        this.getDist();
        this.giveDistance();
        this.giveDate;

    };



    // changeC = (event) => {
    //     this.setState ({
    //         distance: event.target.value
    //     });
    // };

    render(){
        return (
            <div className="companyForm container">Uzupełnij dane w formularzu po prawej stronie.
                <div className="companyData"><br/> DANE FIRMY
                    <form>
                        <input onChange={this.change} id="companyName" type="text" value={this.state.companyName} placeholder="Nazwa firmy"/>
                        <input onChange={this.change} id="companyStreet" type="text" value={this.state.companyStreet} placeholder="Ulica"/>
                        <input onChange={this.change} id="companyPostCode" type="number" value={this.state.companyPostCode} placeholder="Kod pocztowy"/>
                        <input onChange={this.change} id="companyCity" type="text" value={this.state.companyCity} placeholder="Miasto"/>
                        <input onChange={this.change} id="companyNip" type="number" value={this.state.companyNip} placeholder="NIP"/>
                    </form>
                </div>
                <div className="driverData"><br/>  DANE KIEROWCY
                    <form>
                        <input onChange={this.change} id="driverName" type="text" value={this.state.driverName} placeholder="Imię"/>
                        <input onChange={this.change} id="driverSurname" type="text" value={this.state.driverSurname} placeholder="Nazwisko"/>
                        <br/>
                        Adres zamieszkania kierowcy
                        <br/>

                        <input onChange={this.change} id="driverStreet" type="text" value={this.state.driverStreet} placeholder="Ulica"/>
                        <input onChange={this.change} id="driverPostcode" type="text" value={this.state.driverPostCode} placeholder="Kod pocztowy"/>
                        <input onChange={this.change} id="driverCity" type="text" value={this.state.driverCity} placeholder="Miasto"/>
                    </form>
                </div>
                <div className="carData"><br/>  DANE POJAZDU
                    <form>
                        <div>
                        <input onChange={this.change}
                               id="carRegistrationNumber"
                               type="text"
                               value={this.state.carRegistrationNumber}
                               placeholder="Numer rejestracyjny "/>
                        <select onChange={e => this.changeCapacity(e)}
                               id="carCapity"
                               placeholder="Pojemność silnika">
                            <option>wybierz pojemność</option>
                            <option value={0}>pojemność &lt; 900cm3</option>
                            <option value={1}>pojemność &gt; 900cm3</option>
                        </select>
                    </div>

                    </form>
                </div>
                <div className="homeOffice">
                    <div>Wybierz trasę z domu do pracy - automatycznie uzupełni każdy dzień miesiąca, będziesz mógł to edytować.</div>
                    <div>
                        <StandaloneSearchBox
                            ref={ref => this.onSearchBoxMounted(ref, 'searchBoxA')}
                            onPlacesChanged={() => this.onPlacesChanged('searchBoxA')}>
                            <input
                                type="text"
                                placeholder="Punkt A"
                                onChange={e => this.changeA(e)}
                            />
                        </StandaloneSearchBox>
                    </div>
                    <div>
                        <StandaloneSearchBox
                            ref={ref => this.onSearchBoxMounted(ref, 'searchBoxB')}
                            onPlacesChanged={() => this.onPlacesChanged('searchBoxB')}>
                            <input
                                type="text"
                                placeholder="Punkt B"
                                onChange={e => this.changeB(e)}
                            />
                        </StandaloneSearchBox>
                    </div>
                    <div>
                        <input onChange={e => this.changeC(e)} type="text" placeholder="ilość km" value={this.state.distance.slice(0,-3)} disabled/>
                    </div>
                    <div>
                        <button onClick={this.calculateDistance}>Oblicz trasę</button>
                    </div>
                </div>
            </div>
        )
    }
}

export {CompanyForm}