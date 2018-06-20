import React, { Component } from 'react';
import {Header} from "./js/header";
import {CompanyForm} from "./js/companyForm";
import {NewRecordForm} from "./js/newRecordForm";
import {Footer} from "./js/footer";
import "./scss/main.css"



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            capacity: ""
        }
    }

    giveCapacity = (e) => {
        this.setState ({
            capacity: e
        })
    };

  render() {

    return (
        <div>
            <Header></Header>
            <CompanyForm giveCapacity={this.giveCapacity}></CompanyForm>
            <NewRecordForm capacity={this.state.capacity}></NewRecordForm>
            <Footer></Footer>
        </div>
    );
  }
}

export default App;
