import AntDesign from '@expo/vector-icons/AntDesign';
import { ScrollView, Text, View } from 'react-native';

export default function CardBar() {
  return (
    <>
      <View
        style={{ backgroundColor: '#dcdcdc', borderRadius: 5, padding: 12, flexDirection: 'row' }}>
        <View className="flex-row" style={{ alignItems: 'center', gap: 8, padding: 2 }}>
          <AntDesign name="creditcard" size={24} color="black" />
          <Text className="text-xs font-bold"> Meus cartoes</Text>
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{ marginTop: 26, overflow: 'visible' }}>
        <View
          style={{
            backgroundColor: '#dcdcdc',
            borderRadius: 5,
            padding: 12,
            flexDirection: 'row',
            marginRight: 22,
            width: 235,
          }}>
          <View style={{ marginRight: 22 }}>
            <Text className="text-xs">Seu informe de rendimentos 2025 já está disponível</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#dcdcdc',
            borderRadius: 5,
            padding: 12,
            flexDirection: 'row',
            width: 240,
          }}>
          <View style={{ marginRight: 25 }}>
            <Text className="text-xs"> Seu informe de rendimentos 2025 já está disponível</Text>
          </View>
        </View>
      </ScrollView>
      
    </>
  );
}
