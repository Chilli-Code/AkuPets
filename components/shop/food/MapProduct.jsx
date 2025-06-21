import { Image, Text, View } from 'react-native';

export default function PaseosScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Aqui va El Mapa</Text>
      <Image
        source={require('@/assets/images/MapaPrueba.jpg')}
        style={{ width: 400, height: 500, marginTop: 20 }}
        />
    </View>
  );
}