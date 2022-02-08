import {StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
const homescreen = () => {
  return (
    <LinearGradient
      colors={[Colors.LIGHT_GRAY, Colors.DARKER_GRAY]}
      testID="homescreen"
      style={styles.container}></LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 40,
    alignContent: 'space-between',
  },
});

export default homescreen;
