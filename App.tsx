import {ThemeProvider} from '@shopify/restyle';
import {StatusBar} from 'expo-status-bar';
import React from 'react';

import MainScreen from './src/MainScreen';
import theme from './src/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <MainScreen />
    </ThemeProvider>
  );
};

export default App;
