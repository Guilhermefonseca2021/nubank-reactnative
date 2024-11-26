import { Image, Pressable, ScrollView, Text, View } from 'react-native';

export default function BottomHome() {
  return (
    <>
      <Text style={{ fontSize: 24, fontWeight: '600' }}>Descubra mais</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="h-auto w-full"
        style={{ marginTop: 22, marginBottom: 28, overflow: 'visible', display: 'flex', gap: 12 }}>
        <View
          className="bg-gray"
          style={{ width: 265, borderRadius: 8, overflow: 'hidden', marginRight: 22 }}>
          <Image
            source={require('../assets/image1.jpg')}
            style={{ overflow: 'hidden', width: 265 }}
          />
          <View style={{ padding: 12 }}>
            <Text style={{ fontSize: 15, fontWeight: '600', marginBottom: 8 }}>
              Portabilidade de salário
            </Text>
            <Text style={{ color: '#3c3c3c', opacity: 0.4 }}>
              Sua liberdade financeira comeca com voce escolhendo...
            </Text>
            <Pressable
              className="bg-primary"
              style={{ width: 125, alignItems: 'center', borderRadius: 35, marginTop: 10, marginBottom: 5 }}>
              <Text className="p-3 font-bold" style={{ color: '#fff' }}>
                Conhecer
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          className="bg-gray"
          style={{ width: 265, borderRadius: 8, overflow: 'hidden', marginRight: 22 }}>
          <Image
            source={require('../assets/image1.jpg')}
            style={{ overflow: 'hidden', width: 265 }}
          />
          <View style={{ padding: 12 }}>
            <Text style={{ fontSize: 15, fontWeight: '600', marginBottom: 8 }}>
              Portabilidade de salário
            </Text>
            <Text style={{ color: '#3c3c3c', opacity: 0.4 }}>
              Sua liberdade financeira comeca com voce escolhendo...
            </Text>
            <Pressable
              className="bg-primary"
              style={{ width: 125, alignItems: 'center', borderRadius: 35, marginTop: 10, marginBottom: 5 }}>
              <Text className="p-3 font-bold" style={{ color: '#fff' }}>
                Conhecer
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          className="bg-gray"
          style={{ width: 265, borderRadius: 8, overflow: 'hidden', marginRight: 22 }}>
          <Image
            source={require('../assets/image1.jpg')}
            style={{ overflow: 'hidden', width: 265 }}
          />
          <View style={{ padding: 12 }}>
            <Text style={{ fontSize: 15, fontWeight: '600', marginBottom: 8 }}>
              Portabilidade de salário
            </Text>
            <Text style={{ color: '#3c3c3c', opacity: 0.4 }}>
              Sua liberdade financeira comeca com voce escolhendo...
            </Text>
            <Pressable
              className="bg-primary"
              style={{ width: 125, alignItems: 'center', borderRadius: 35, marginTop: 10, marginBottom: 5 }}>
              <Text className="p-3 font-bold" style={{ color: '#fff' }}>
                Conhecer
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
