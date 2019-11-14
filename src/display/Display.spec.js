// Test away!
import React from 'react'
import Display from './Display';
import { render } from 'react-testing-library';
// import '@testing-library/jest-dom/extend-expect';

test("Display Renders without Crashing", () => {
    render(<Display/>)
})
test("Display Snapshot", () => {
    const wrapper = render(<Display />)
    expect(wrapper.asFragment()).toMatchSnapshot()
})
test("Displays open/closed and locked/unlocked", () => {
    const wrapper = render(<Display />)
})