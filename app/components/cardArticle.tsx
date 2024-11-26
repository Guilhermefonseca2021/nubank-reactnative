import AntDesign from '@expo/vector-icons/AntDesign';
import { Pressable, Text, View } from 'react-native';

export default function CardArticle() {
  return (
    <View style={{ marginTop: 14 }}>
      <AntDesign name="creditcard" size={24} color="black"  />
      <Text style={{ fontSize: 28, marginTop: 6, fontWeight: '500' }}>Cartão de credito</Text>
      <Text style={{ marginTop: 10, marginBottom: 18 }}>
        Peca seu cartão de crédito sem anuidade e tenha mais controle da sua vida financeira.
      </Text>
      <Pressable className="bg-primary" style={{ width: 125, alignItems: 'center', borderRadius: 35 }}>
        <Text className="p-3" style={{ color: '#fff' }}>
          Pedir Cartão
        </Text>
      </Pressable>
    </View>
  );
}
