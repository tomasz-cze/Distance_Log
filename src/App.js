import React, { Component } from 'react';
import {Header} from "./js/header";
import {CompanyForm} from "./js/companyForm";
import {NewRecordForm} from "./js/newRecordForm";
import {MainTable} from "./js/mainTable";
import {Footer} from "./js/footer";
// import main from "./scss"



class App extends Component {
  render() {
    return (
        <div>
            <Header></Header>
            <CompanyForm></CompanyForm>
            <NewRecordForm></NewRecordForm>
            <MainTable></MainTable>
            <Footer></Footer>
        </div>
    );
  }
}

export default App;
