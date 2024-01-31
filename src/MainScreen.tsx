import {Ionicons} from '@expo/vector-icons';
import React from 'react';

import Box from './components/primitives/Box';
import SafeAreaView from './components/primitives/SafeAreaView';
import Text from './components/primitives/Text';
import theme from './theme';

const MainScreen = () => {
  return (
    <SafeAreaView flex={1}>
      <Box flex={1} justifyContent="center" alignItems="center" gap="s" padding="m">
        <Ionicons name="logo-react" size={64} color={theme.colors.textPrimary} />
        <Text accessibilityLabel="header" variant="header">
          Expo App
        </Text>
        <Text accessibilityLabel="body" variant="body">
          Ready to go!
        </Text>
      </Box>
    </SafeAreaView>
  );
};

export default MainScreen;
