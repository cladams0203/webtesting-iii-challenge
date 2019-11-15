// Test away!
import React from 'react'
import Controls from './Controls';
import { render } from 'react-testing-library';
import '@testing-library/jest-dom/extend-expect';

test('Controls renders without crashing', () => {
    render(<Controls/>)
})
test('Controls Snapshot', () => {
    const wrapper = render(<Controls/>)
    expect(wrapper.asFragment()).toMatchSnapshot()
})
test('Buttons display in document', () => {
    const wrapper = render(<Controls/>)
    const button1 = wrapper.getByTestId('button1')
    const button2 = wrapper.getByTestId('button2')
    expect(button1).toBeInTheDocument()
    expect(button2).toBeInTheDocument()
})
test('Button text reflects state', () => {
    const wrapper = render(<Controls/>)
    const button1 = wrapper.getByTestId('button1')
    const lockbutton = button1.getAttribute('disabled')
    lockbutton === false ? 
    expect(button1.textContent).toMatch(/unlock gate/i) :
    expect(button1.textContent).toMatch(/lock gate/i)
    const button2 = wrapper.getByTestId('button2')
    const lockbutton2 = button2.getAttribute('disabled')
    lockbutton2 === false ? 
    expect(button2.textContent).toMatch(/open gate/i) :
    expect(button2.textContent).toMatch(/close gate/i)

})


