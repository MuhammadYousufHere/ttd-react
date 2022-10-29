import { render, screen } from '@testing-library/react';
import App from '../App';

let timeout = 6000;
test('First', function () {
  render(<App />);
  const bal = false;
  expect(bal).toBeFalsy();
});
test('Second', function () {
  render(<App />);
  const bal = screen.getByText(/reload/i);
  expect(bal).toBeTruthy();
});

beforeEach(() => {}); // runs before each test;
afterEach(() => {}); // runs after each test;

beforeAll(() => {}); // runs before all test - only once
afterAll(() => {}); // runs after all test - only once;

test.only('Run just this', () => {}); // ignore's all others test and runs only this test. (one at a time)

test.skip('this is skipped', () => {}); // exactly

test('name', () => {}, timeout);

// configure default timeout for all test;

jest.setTimeout(8000); // default is 5 sec.
