import React, { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    render() {
        return(
            <div data-test="component-big-component">
                <h1 data-test="counter-display">The counter is</h1>
                <button data-test="increment-button">Counter++</button>
            </div>
        )
    }
}

export default App;