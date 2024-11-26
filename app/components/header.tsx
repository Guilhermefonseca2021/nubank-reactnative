import { View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';

export default function Header() {
  return (
    <View>
      <View className="bg-primary p-8" >
        <View className=" flex-row justify-between ">
          <View className="text-foreground text-center text-sm font-medium tracking-wider opacity-60">
            <Link href="/menu">
              <View style={{ backgroundColor: "#dcdcdc", padding: 8, borderRadius: 50, opacity: 0.4}}>
              <AntDesign name="user" size={24} color="#fff" />
              </View>
            </Link>
          </View>
          <View className="w-32 flex-row justify-between">
            <AntDesign name="eye" size={24} color="white" />
            <AntDesign name="questioncircleo" size={24} color="white" />
            <AntDesign name="mail" size={24} color="white" />
          </View>
        </View>
      </View>
      <View className="bg-primary p-6" style={{ marginTop: -18}}>
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: '700'}}>Olá, Guilherme F. Santos</Text>
      </View>
    </View>
  );
}
