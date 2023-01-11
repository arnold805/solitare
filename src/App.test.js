/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

test('renders new game button', () => {
  render(<App />);
  const newGameBtn = screen.getByText(/NEW GAME/i);
  expect(newGameBtn).toBeInTheDocument();
});
