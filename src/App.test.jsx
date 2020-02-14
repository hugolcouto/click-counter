import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

const setup = (props = {}, state = null) => {
    const wrapper = shallow(<App {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
};

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('Renders without errors', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-big-component');
    expect(appComponent.length).toBe(1);
});

test('Renders increment button', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'increment-button');
    expect(appComponent.length).toBe(1);
});

test('Renders counter display', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'counter-display');
    expect(appComponent.length).toBe(1);
});

test('Counter starts at 0', () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state('counter');
    expect(initialCounterState).toBe(0);
});

test('Clicking button increments counter display', () => {
    const counter = 7;
    const wrapper = setup(null, { counter });
    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter + 1);
});
