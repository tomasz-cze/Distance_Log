import React, { Component } from 'react';

class Header extends Component{
    render() {
        return (
            <header>
                <div className="container">
                    <div className="mainLogo"></div>
                    <div className="aplicationDescript">KILOMETRÓWKA - jest to aplikacja do generowania ewidencji przebiegu pojazdu dla przedsiębiorców, którzy używają swojego samochodu w celach służbowych. Masz możliwośc edycji całej kilometrówki na wiele spsobów.</div>
                </div>

            </header>
        )
    }
}

export {Header}