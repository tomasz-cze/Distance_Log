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

    // changing state of car capacity
    changeCapacity = (e) => {
        this.props.giveCapacity(e.target.value)
    };

    // changing inputs in Company Form
    change = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    };

    render(){
        return (
            <div className="companyForm container">
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
                        <input onChange={this.change} id="carRegistrationNumber" type="text" value={this.state.carRegistrationNumber} placeholder="Numer rejestracyjny "/>
                        <select onChange={e => this.changeCapacity(e)} id="carCapity" placeholder="Pojemność silnika">
                            <option></option>
                            <option value={0}>pojemność &lt; 900cm3</option>
                            <option value={1}>pojemność &gt; 900cm3</option>
                        </select>
                    </div>

                    </form>
                </div>
                <div className="homeOffice">
                    <div>Wybierz trasę z domu do pracy - automatycznie uzupełni każdy dzień miesiąca, będziesz mógł to edytować.</div>
                    <div>
                        <input onChange={e => this.changeA(e)} type="text" placeholder="Dom" value={this.state.homePoint}/>
                    </div>
                    <div>
                        <input onChange={e => this.changeB(e)} type="text" placeholder="Praca" value={this.state.workPoint}/>
                    </div>
                    <div>
                        <input onChange={e => this.changeC(e)} type="number" placeholder="ilość km" value={this.state.routLength}/>
                    </div>
                    <div>
                        <select  onChange={e => this.changeSelect(e)}>
                            <option></option>
                            <option>Dojazd do pracy</option>
                            <option>Dojazd do klienta</option>
                            <option>Transport towaru</option>
                            <option>Inne</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export {CompanyForm}