import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Navigation from './app/Navigations';

function App(): JSX.Element {
  const isDarkMode = true;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'black'}
      />
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19150a',
  },
});

export default App;
