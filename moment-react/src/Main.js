import React, { Component } from 'react';
import SearchDDG from './SearchDDG';
import Clock from './Clock'
import './main.css'

class Main extends Component {
    render() {
        return (
            <div className='main'>
                Main
                <SearchDDG/>
                <Clock />
            </div>
        );
    }
}

export default Main;