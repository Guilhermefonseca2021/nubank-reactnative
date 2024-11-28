import { View, Text, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Valuability() {
  return (
    <View>
      <Text style={{ fontSize: 22, fontWeight: "500"}}>Conta</Text>
      <View className="my-4">
        <Text style={{ fontSize: 28, fontWeight: "500", marginBottom: 22 }}>R$ 25.898,43</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        className="h-auto w-full" style={{  marginTop: -2, marginBottom: 36, overflow: "visible"}}>
        <View style={{ alignItems: 'center', marginRight: 18 }}>
          <View style={{ backgroundColor: '#dcdcdc', padding: 28, marginBottom: 6, borderRadius: 50, opacity: 1.0 }}>
            <AntDesign name="creditcard" size={15} color="black" />
          </View>
          <Text>Pix</Text>
        </View>
        <View style={{ alignItems: 'center', marginRight: 18 }}>
          <View style={{ backgroundColor: '#dcdcdc', padding: 28, marginBottom: 6, borderRadius: 50, opacity: 1.0 }}>
            <AntDesign name="barcode" size={15} color="black" />
          </View>
          <Text>Pagar</Text>
        </View>
        <View style={{ alignItems: 'center', marginRight: 18 }}>
          <View style={{ backgroundColor: '#dcdcdc', padding: 28, marginBottom: 6, borderRadius: 50, opacity: 1.0 }}>
            <AntDesign name="arrowup" size={15} color="black" />
          </View>
          <Text>Transferir</Text>
        </View>
        <View style={{ alignItems: 'center', marginRight: 18 }}>
          <View style={{ backgroundColor: '#dcdcdc', padding: 28, marginBottom: 6, borderRadius: 50, opacity: 1.0 }}>
            <AntDesign name="arrowdown" size={15} color="black" />
          </View>
          <Text>Depositar</Text>
        </View>
        <View style={{ alignItems: 'center', marginRight: 18 }}>
          <View style={{ backgroundColor: '#dcdcdc', padding: 28, marginBottom: 6, borderRadius: 50, opacity: 1.0 }}>
            <AntDesign name="mobile1" size={15} color="black" />
          </View>
          <Text>Recarga</Text>
        </View>
        <View style={{ alignItems: 'center', marginRight: 18 }}>
          <View style={{ backgroundColor: '#dcdcdc', padding: 28, marginBottom: 6, borderRadius: 50, opacity: 1.0 }}>
            <AntDesign name="heart" size={15} color="outlined" />
          </View>
          <Text>Doacao</Text>
        </View>
      </ScrollView>
    </View>
  );
}
