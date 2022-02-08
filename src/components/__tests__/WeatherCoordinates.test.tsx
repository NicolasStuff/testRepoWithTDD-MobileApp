import React from 'react';
import {render} from '@testing-library/react-native';
import WeatherCoordinates from '../WeatherCoordinates';

describe('WeatherCoordinates', () => {
  test('renders correctly weather coordinates', () => {
    const wrapper = render(<WeatherCoordinates />);
    wrapper.getByTestId('WeatherCoordinates');
  });
});
