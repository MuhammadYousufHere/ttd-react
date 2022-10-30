import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from '../Button';

test('Label of button', function () {
  const {} = render(<Button title='Click me' />);
  const title = screen.getByTitle(/Click me/i);
  expect(title).toBeTruthy();
});

// Slelect element from component

// ---> getBy
// ---> queryBy
// ---> findBy
