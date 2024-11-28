import AntDesign from '@expo/vector-icons/AntDesign';
import { ScrollView, Text, View } from 'react-native';

export default function CardBar() {
  return (
    <>
      <View
        style={{ backgroundColor: '#dcdcdc', borderRadius: 10, padding: 12, flexDirection: 'row' }}>
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
            borderRadius: 10,
            padding: 12,
            flexDirection: 'row',
            marginRight: 22,
            width: 235,
          }}>
          <View style={{ marginRight: 22 }}>
            <Text className="text-xs">
              Seu <Text className="text-primary">informe de rendimentos</Text> 2025 já está
              disponível
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#dcdcdc',
            borderRadius: 10,
            padding: 12,
            flexDirection: 'row',
            marginRight: 18,
            width: 235,
          }}>
          <View style={{ marginRight: 22 }}>
            <Text className="text-xs">
              Você tem R$ 74.466,67 disponiveis para<Text className="text-primary">emprestimo</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
