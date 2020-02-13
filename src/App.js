import React from 'react';

export default () => {
    return (
        <div data-test="component-big-component">
            <h1 data-test="counter-display">The counter is</h1>
            <button data-test="increment-button">Counter++</button>
        </div>
    );
};
