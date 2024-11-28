import '../global.css';
import { Stack } from 'expo-router';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor="#8A19D6" barStyle="light-content" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: '#8A19D6',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="menu" options={{ headerShown: false }} />
        </SafeAreaView>
      </Stack>
    </>
  );
}
