import React, { Component } from 'react';

class Instruction extends Component{
    render () {
        return (
            <div className="discription">

                <ol>             <h1>Jak stworzyć kilometrówkę</h1>
                    <li>Wprowadź dane przedsiębiorstwa</li>
                    <li>Wprowadź dane kierowcy</li>
                    <li>Wprowadź numer rejestracyjny pojazdu oraz wybierz pojemność</li>
                    <li>Wprowadź trasę z domu do pracy</li>
                    <li>Wybierz miesiąc i rok</li>
                    <li>Naciśnij - STWÓRZ KILOMETRÓWKĘ</li>
                </ol>
            </div>
        )
    }
}

export {Instruction}
