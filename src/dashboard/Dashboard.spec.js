// Test away
import React from 'react'
import Dashboard from './Dashboard';
import {render} from 'react-testing-library'

test("Dashboard Renders Without Crashing", () => {
    render(<Dashboard />);
})
test("Dashboard Snapshot", () => {
    const wrapper = render(<Dashboard />)
    expect(wrapper.asFragment()).toMatchSnapshot()
})
test("Open and Unlocked by Default", () => {
    const wrapper = render(<Dashboard/>);
    expect(wrapper.getByText(/unlocked/i).textContent).toMatch(/unlocked/i)
    expect(wrapper.getByText(/open/i).textContent).toMatch(/open/i)
})
test('Shows Controls and Display', () => {
    const wrapper = render(<Dashboard />)
    expect(wrapper.getByText(/unlocked/i).textContent).toMatch(/unlocked/i)
    expect(wrapper.getByText(/open/i).textContent).toMatch(/open/i)
    expect(wrapper.getByText(/lock gate/i).textContent).toMatch(/lock gate/i)
    expect(wrapper.getByText(/close gate/i).textContent).toMatch(/close gate/i)
})
test('Cannot be Closed or Opened if Locked', () => {
    const wrapper = render(<Dashboard/>)
    const locked = wrapper.queryByText(/unlock gate/i)
    locked && expect(wrapper.getByText(/locked/i).className).toMatch(/red-led/i)
    locked && expect(wrapper.getByText(/closed/i).className).toMatch(/red-led/i)
})