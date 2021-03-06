import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../app/App';

describe('App', () => {
  test('render app ', () => {
    render(<App />);
    const linkElement = screen.getByText(/LOGIN/i);
    expect(linkElement).toBeInTheDocument();
  });
});
