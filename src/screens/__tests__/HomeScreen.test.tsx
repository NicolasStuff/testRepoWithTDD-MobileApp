import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';
import {View} from 'react-native';
import WeatherCurrent from '../../components/WeatherCurrent';

jest.mock('../../components/WeatherCoordinates', () =>
  jest.fn().mockReturnValue(null),
);
jest.mock('../../components/WeatherCurrent', () =>
  jest.fn().mockReturnValue(null),
);

describe('HomeScreen', () => {
  test('renders correctly', () => {
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('homescreen');
  });

  describe('Title section', () => {
    beforeEach(() => {
      jest.useFakeTimers('modern');
      jest.setSystemTime(946684800000);
    });
    afterEach(() => {
      jest.useRealTimers();
    });

    test('Should contain current date', () => {
      const wrapper = render(<HomeScreen />);
      expect(wrapper.getByText('Jan 01, 2000'));
    });

    test('Should contain current day', () => {
      const wrapper = render(<HomeScreen />);
      expect(wrapper.getByText('Saturday'));
    });
  });

  test('Should contain a section to get currrent weather', () => {
    (WeatherCurrent as jest.Mock).mockReturnValue(
      <View testID="WeatherCurrent" />,
    );
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('WeatherCurrent');
  });

  test('Should contain a divider', () => {
    const wrapper = render(<HomeScreen />);
    expect(wrapper.getByTestId('divider'));
  });

  test('Should contain a section to get weather at given long and lat', () => {
    (WeatherCurrent as jest.Mock).mockReturnValue(
      <View testID="WeatherCoordinates" />,
    );
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('WeatherCoordinates');
  });
});
