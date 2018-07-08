import React, {Component} from 'react';

//https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=Poznan&destinations=Gdansk

import {withGoogleMap, GoogleMap, Marker} from "react-google-maps"


class MyMapComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <GoogleMap
            defaultZoom={6}
            defaultCenter={{lat: 51.9324509, lng: 16.8922361}}
        >
            {this.props.markerA && <Marker position={{
                lat: this.props.markerA[0].geometry.location.lat(),
                lng: this.props.markerA[0].geometry.location.lng()
            }}/>}
            {this.props.markerB && <Marker position={{
                lat: this.props.markerB[0].geometry.location.lat(),
                lng: this.props.markerB[0].geometry.location.lng()
            }}/>}
        </GoogleMap>
    }
}
MyMapComponent = withGoogleMap(MyMapComponent);

export {MyMapComponent}


