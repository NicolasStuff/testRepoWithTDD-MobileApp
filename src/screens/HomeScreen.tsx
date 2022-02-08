import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import WeatherCurrent from '../components/WeatherCurrent';
import WeatherCoordinates from '../components/WeatherCoordinates';

const homescreen = () => {
  const now = moment(new Date());
  return (
    <LinearGradient
      colors={[Colors.LIGHT_GRAY, Colors.DARKER_GRAY]}
      testID="homescreen"
      style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.date}>{now.format('MMM DD, YYYY')}</Text>
        <Text style={styles.day}>{now.format('dddd')}</Text>
      </View>
      <WeatherCurrent />
      <Text testID="divider" style={styles.divider}>
        or
      </Text>
      <WeatherCoordinates />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 40,
    alignContent: 'space-between',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    fontSize: 30,
    color: Colors.GRAY,
    fontWeight: 'bold',
  },
  day: {
    fontSize: 20,
    color: Colors.GRAY,
    fontWeight: 'bold',
  },
  divider: {
    fontSize: 30,
    color: Colors.GRAY,
    fontWeight: 'bold',
  },
});

export default homescreen;
