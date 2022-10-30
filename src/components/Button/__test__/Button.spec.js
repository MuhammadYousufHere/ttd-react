import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Button from '../Button';

test('Label of button', function () {
  const view = render(
    <Button
      title='Click me'
      onClick={() => console.log('Clicked')}
    />
  );
  const title = screen.getByTitle(/Click me/i);
  expect(title).toBeTruthy();

  // The button should be clicked
  const btn = screen.getByRole('button');

  fireEvent.click(btn);
});

// Slelect element from component

// ---> getBy
// ---> queryBy
// ---> findBy

// DOM
// ---> getByRole

// ---> queryByRole
// ---> findByRole
// ---> queryByRole('button')
// ---> findByRole('button')
// ---> queryByRole('button', { exact: false })

test('Check for disabled button', function () {
  const view = render(<Button />);
  const button = screen.getByRole('button');
  expect(button).toBeDisabled();
  expect(button).toHaveAttribute('disabled');
  expect(button).toHaveAttribute('aria-disabled');
});
