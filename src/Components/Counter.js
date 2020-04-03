import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }
    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    }
    handleReset = () => {
        this.setState({ count: 0 });
    }
    render() {
        return (
            <section>
                <button onClick={this.handleDecrement}>-1</button>
                <p>{this.state.count}</p>
                <button onClick={this.handleIncrement}>+1</button>
                <button onClick={this.handleReset}>Reset</button>
            </section>
        );
    }
}

export default Counter;