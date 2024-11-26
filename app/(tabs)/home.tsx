import { Stack } from 'expo-router';
import { ScrollView, View } from 'react-native';
import Header from '../components/header';
import Valuability from '../components/valuability';
import CardBar from '../components/cardbar';
import CardArticle from '../components/cardArticle';
import Separator from '../components/separator';
import BottomHome from '../components/bottomHome';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View className="p-6">
          <Valuability />
          <CardBar />
        </View>
        <Separator />
        <View className="p-6">
          <CardArticle />
        </View>
        <Separator />
        <View className="p-6">
          <BottomHome />
        </View>
      </ScrollView>
    </>
  );
}
