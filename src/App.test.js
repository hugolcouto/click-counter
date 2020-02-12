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

});

test('Renders counter display', () => {

});

test('Counter starts at 0', () => {

});

test('Clicking button increments counter display', () => {

});
