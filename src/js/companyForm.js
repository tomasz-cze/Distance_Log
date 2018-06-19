import React, { Component } from 'react';

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
            carCapacity: ""

        }
    }

    render(){
        return (
            <div className="companyForm container">
                <div>
                    <form>
                        <input onChange={this.change} type="text" value={this.state.companyName} placeholder="Nazwa firmy"/>
                        <input onChange={this.change} type="text" value={this.state.companyStreet} placeholder="Ulica"/>
                        <input onChange={this.change} type="number" value={this.state.companyPostCode} placeholder="Kod pocztowy"/>
                        <input onChange={this.change} type="text" value={this.state.companyCity} placeholder="Miasto"/>
                        <input onChange={this.change} type="number" value={this.state.companyNip} placeholder="NIP"/>
                    </form>
                </div>
                <div>
                    <form>
                        <input onChange={this.change} type="text" value={this.state.driverName} placeholder="Imię"/>
                        <input onChange={this.change} type="text" value={this.state.driverSurname} placeholder="Nazwisko"/>
                        <input onChange={this.change} type="number" value={this.state.driverStreet} placeholder="Ulica - adres zamieszkania"/>
                        <input onChange={this.change} type="text" value={this.state.driverPostCode} placeholder="Kod pocztowy - adres zamieszkania"/>
                        <input onChange={this.change} type="number" value={this.state.driverCity} placeholder="Miasto - adres zamieszkania"/>
                    </form>
                </div>
                <div>
                    <form>
                        <input onChange={this.change} type="text" value={this.state.carRegistrationNumber} placeholder="Numer rejestracyjny pojazu"/>
                        <input onChange={this.change} type="text" value={this.state.Capacity} placeholder="Pojemność silnika (bez jednostek, same liczby"/>
                    </form>
                </div>
            </div>
        )
    }
}

export {CompanyForm}