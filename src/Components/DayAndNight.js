import React, { Component } from 'react';
import './dayandnight.css'
class DayAndNight extends Component {
    state = {
        isDay: true

    }
    handleClik = () => {
        console.log("it's clicked")
        this.setState({ isDay: !this.state.isDay });

    }
    render() {
        return (
            <section className={this.state.isDay ? "light" : "dark"}>
                <p>{this.state.isDay ? "Day" : "Night"}</p>
                <button onClick={this.handleClik}>Change to {this.state.isDay ? "Night" : "Day"}</button>
            </section>
        );
    }
}

export default DayAndNight;