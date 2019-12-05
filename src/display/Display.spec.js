// Test away!
import React from 'react'
import Display from './Display';
import * as rtl  from 'react-testing-library';
import '@testing-library/jest-dom/extend-expect';


test("Display Renders without Crashing", () => {
    rtl.render(<Display/>)
})
test("Display Snapshot", () => {
    const wrapper = rtl.render(<Display />)
    expect(wrapper.asFragment()).toMatchSnapshot()
})
test("Displays open/closed and locked/unlocked", () => {
    const wrapper = rtl.render(<Display />)
   const display1 = wrapper.getByTestId('display1')
   const display2 = wrapper.getByTestId('display2')
   expect(display1).toBeInTheDocument()
   expect(display2).toBeInTheDocument()
})
test('Displays Closed if Closed prop is true and red/green class', () => {
    const wrapper = rtl.render(<Display/>)
    const closed = wrapper.getByTestId('display2')
    closed.classList.contains('red-led') &&
    expect(closed.textContent).toMatch(/closed/i)
    closed.classList.contains('green-led') &&
    expect(closed.textContent).toMatch(/open/i)
})
test('Displays Locked if Locked prop is true and red/green class', () => {
    const wrapper = rtl.render(<Display/>)
    const locked = wrapper.getByTestId('display1')
    locked.classList.contains('red-led') &&
    expect(locked.textContent).toMatch(/locked/i)
    locked.classList.contains('green-led') &&
    expect(locked.textContent).toMatch(/unlocked/i)
})

