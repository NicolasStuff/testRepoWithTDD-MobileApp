import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

describe('HomeScreen', () => {
  test('renders correctly', () => {
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('homescreen');
  });
});
