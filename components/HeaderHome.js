import { Feather, Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HeaderHome({ onMenuPress, onSettingsPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onMenuPress}>
        <Feather name="menu" size={24} />
      </TouchableOpacity>
      <View style={styles.addressContainer}>
        <Ionicons name="location-sharp" size={16} color="#007AFF" />
        <Text style={styles.addressText}>Cl 21 # 21 - 31</Text>
      </View>
      <TouchableOpacity onPress={onSettingsPress}>
        <Feather name="settings" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    marginLeft: 5,
    fontWeight: '600',
  },
});
