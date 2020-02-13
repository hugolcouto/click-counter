import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

test('Renders without errors', () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find('[data-test="component-big-component"]');
    expect(appComponent.length).toBe(1);
});

test('Renders increment button', () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('[data-test="increment-button"]');
    expect(button.length).toBe(1);
});

test('Renders counter display', () => {
    const wrapper = shallow(<App />);
    const counterDisplay = wrapper.find('[data-test="counter-display"]');
    expect(counterDisplay.length).toBe(1);
});

test('Counter starts at 0', () => {
    const wrapper = shallow(<App />);
    const counterDisplay = wrapper.find('[data-test="counter-display"]');
    expect(counterDisplay.length).toBe(1);
});

test('Clicking button increments counter display', () => {

});
