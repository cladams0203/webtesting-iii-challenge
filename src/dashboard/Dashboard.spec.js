// Test away
import React from 'react'
import Dashboard from './Dashboard';
import Controls from '../controls/Controls'
import * as rtl from 'react-testing-library'

test("Dashboard Renders Without Crashing", () => {
    rtl.render(<Dashboard />);
})
test("Dashboard Snapshot", () => {
    const wrapper = rtl.render(<Dashboard />)
    expect(wrapper.asFragment()).toMatchSnapshot()
})
test("Open and Unlocked by Default", () => {
    const wrapper = rtl.render(<Dashboard/>);
    expect(wrapper.getByText(/unlocked/i).textContent).toMatch(/unlocked/i)
    expect(wrapper.getByText(/open/i).textContent).toMatch(/open/i)
})
test('Shows Controls and Display', () => {
    const wrapper = rtl.render(<Dashboard />)
    expect(wrapper.getByText(/unlocked/i).textContent).toMatch(/unlocked/i)
    expect(wrapper.getByText(/open/i).textContent).toMatch(/open/i)
    expect(wrapper.getByText(/lock gate/i).textContent).toMatch(/lock gate/i)
    expect(wrapper.getByText(/close gate/i).textContent).toMatch(/close gate/i)
})
test('Cannot be Closed or Opened if Locked', () => {
    const wrapper = rtl.render(<Dashboard/>)
    const locked = wrapper.queryByText(/unlock gate/i)
    locked && expect(wrapper.getByText(/locked/i).className).toMatch(/red-led/i)
    locked && expect(wrapper.getByText(/closed/i).className).toMatch(/red-led/i)
})
test('checking button functionality', () => {
    const wrapper = rtl.render(<Controls />)
    const button2 = wrapper.getByTestId('button2')
    const button1 = wrapper.getByTestId('button1')
    rtl.act(() => {
        rtl.fireEvent.click(button2)
        
    })
     expect(wrapper.getByTestId('button2').textContent).toMatch(/open gate/i)

     rtl.act(() => {
        rtl.fireEvent.click(button1)
        
    })
     expect(wrapper.getByTestId('button1').textContent).toMatch(/unlock gate/i)
    
})