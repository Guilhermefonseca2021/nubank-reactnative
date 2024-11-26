import { Text, View } from 'react-native';

export default function Separator() {
  return (
    <>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 34, overflow: "visible"}}>
        <View style={{ flex: 1, height: 1.2, backgroundColor: '#dcdcdc' }} />
      </View>
    </>
  );
}
