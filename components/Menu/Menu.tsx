

// components/Menu/Menu.tsx
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

interface MenuProps {
  name: string;
  onLogout: () => void;
  onClose?: () => void;
}

const Menu: React.FC<MenuProps> = ({ name, onLogout, onClose }) => {
  const slideAnim = useRef(new Animated.Value(-width)).current;
  const router = useRouter();

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.overlay}>
    	      {/* MenÃº animado a la izquierda */}
      <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}>
        <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
          <View style={styles.header}>
            <Image source={require('@/assets/images/citas.jpg')} style={styles.avatar} />
            <Text style={styles.name}>{name}</Text>
          </View>

          <View style={styles.divider} />

          <MenuItem
            icon="credit-card"
            label="Mis compras"
            onPress={() => {
              onClose?.();
              router.push('/screens/InfoUser/UserBuys');
            }}
          />
          <MenuItem
            icon="shopping-bag"
            label="Metodos de pago"
            onPress={() => {
              onClose?.();
              router.push('/screens/InfoUser/UserTarget');
            }}
          />
          <MenuItem
            icon="message-circle"
            label="Mensajes"
            onPress={() => {
              onClose?.();
              router.push('/screens/InfoUser/ListMessage');
            }}
          />

          <View style={styles.banner}>
            <Image source={require('@/assets/images/citas.jpg')} style={{ 
              width: '100%', 
              height: 150, 
              objectFit:"cover", 
              borderRadius:5 }} resizeMode="cover" />
          </View>

          <MenuItem icon="settings" label="Configuracion" onPress={() =>{onClose?.(); router.push('/screens/settings/settings');}} />
          <MenuItem icon="user" label="Mi cuenta" />
          <MenuItem icon="log-out" label="Cerrar session" onPress={onLogout} danger />
        </ScrollView>
      </Animated.View>
      {/* Zona derecha: se puede presionar para cerrar */}
      <Pressable style={styles.backdrop} onPress={onClose} />


    </View>
  );
};

const MenuItem = ({
  icon,
  label,
  onPress,
  danger = false,
}: {
  icon: any;
  label: string;
  onPress?: () => void;
  danger?: boolean;
}) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Feather name={icon} size={20} style={[styles.icon, danger && { color: 'red' }]} />
    <Text style={[styles.menuText, danger && { color: 'red' }]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor:"#00000036",
    flexDirection: 'row',
    ...StyleSheet.absoluteFillObject,
    zIndex:9999,
  },
  backdrop: {
    flex: 1,
  },
  menuContainer: {
    width: width * 0.75,
    zIndex:9999,
    backgroundColor: '#ffffff',
    padding:20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    marginBottom: 10,
    flexDirection:"row",

  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:10,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 10,
  },
  icon: {
    marginRight: 12,
  },
  menuText: {
    fontSize: 16,
  },
  banner: {
    backgroundColor: '#eef',
    width: '100%',
    marginBottom: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Menu;
