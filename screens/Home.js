import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '../context/useTheme';
import Styles from '../Styles';

export default function Home() {
  const { isDarkMode } = useTheme();
  return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
      <Text style={[styles.homeText, isDarkMode ? Styles.dark : Styles.light]}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  homeText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 50,
  },
});
