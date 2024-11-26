import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          display: 'none',
        },
      }}
    >
      <Tabs.Screen name="home" options={{}} />
      <Tabs.Screen name="menu" options={{}} />
    </Tabs>
  );
}
