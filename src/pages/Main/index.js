import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

const Main = () => (
  <View style={[styles.container, styles.text]}>
    <Text style={styles.text}>Covid-19, fique em casa!</Text>
  </View>
);

export default Main;
