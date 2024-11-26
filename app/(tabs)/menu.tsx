import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex">
        <Text>My menu</Text>
      </View>
    </>
  );
}
