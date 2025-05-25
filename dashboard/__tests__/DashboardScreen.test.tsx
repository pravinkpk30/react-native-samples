import React from 'react';
import { render, screen } from '@testing-library/react-native';
import DashboardScreen from '../src/screens/DashboardScreen';

describe('DashboardScreen', () => {
  it('renders welcome message', () => {
    render(<DashboardScreen />);
    const welcomeText = screen.getByText('Welcome to the Dashboard!');
    expect(welcomeText).toBeTruthy();
  });
});
