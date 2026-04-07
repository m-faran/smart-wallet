import "node-libs-react-native/globals.js";
import "react-native-get-random-values";

import React from 'react';
import { Stack } from 'expo-router';
import { AlchemyAccountProvider } from '@account-kit/react-native';
import { QueryClient } from '@tanstack/react-query';
import { config } from '../alchemyConfig';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <AlchemyAccountProvider config={config} queryClient={queryClient}>
      <Stack>
        {/* This tells Expo to load the (tabs) folder as the main interface */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </AlchemyAccountProvider>
  );
}