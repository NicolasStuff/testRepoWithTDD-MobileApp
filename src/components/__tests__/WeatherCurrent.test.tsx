import React from 'react';
import {render} from '@testing-library/react-native';
import WeatherCurrent from '../WeatherCurrent';

describe('WeatherCurrent', () => {
  test('renders correctly render current', () => {
    const wrapper = render(<WeatherCurrent />);
    wrapper.getByTestId('WeatherCurrent');
  });
});
