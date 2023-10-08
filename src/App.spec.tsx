import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.tsx'

// let timeout = 6000

describe('App tests', () => {
  it('should contains the heading 1', () => {
    render(<App />)
    const heading = screen.getByText(/Hello world! I am using React/i)
    expect(heading).toBeInTheDocument()
  })
  it('render checkbox', () => {
    render(<App />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
  })
  test('checkbox click', async function () {
    render(<App />)
    const checkboxLabel = screen.getByText(/Do You/i, { selector: 'label' })
    // its not htmlFor use native  - for
    expect(checkboxLabel).toHaveAttribute('for', 'love')
    expect(screen.queryByRole('checkbox')).not.toBeChecked()
    await act(async () => {
      await userEvent.click(screen.getByRole('checkbox'))
    })
    expect(screen.getByRole('checkbox')).toBeChecked()
  })
  test('double click click', async function () {
    render(<App />)
    const checkboxLabel = screen.getByText(/Do You/i, { selector: 'label' })
    const checkbox = screen.getByRole('checkbox')
    const onChange = jest.fn()
    // its not htmlFor use native  - for
    expect(checkboxLabel).toHaveAttribute('for', 'love')
    expect(checkbox).not.toBeChecked()
    checkbox.onchange = onChange
    await act(async () => {
      await userEvent.dblClick(checkbox)
    })

    expect(onChange).toHaveBeenCalledTimes(2)
    expect(checkbox).not.toBeChecked()
  })
})

// beforeEach(() => {}) // runs before each test;
// afterEach(() => {}) // runs after each test;

// beforeAll(() => {}) // runs before all test - only once
// afterAll(() => {}) // runs after all test - only once;

// test.only('Run just this', () => {}) // ignore's all others test and runs only this test. (one at a time)

// test.skip('this is skipped', () => {}) // exactly

// test('name', () => {}, timeout)

// // configure default timeout for all test;

// jest.setTimeout(8000) // default is 5 sec.
