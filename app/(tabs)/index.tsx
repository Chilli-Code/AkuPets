import HeaderHome from '@/components/HeaderHome.js';
import Menu from "@/components/Menu/Menu";
import { Feather } from '@expo/vector-icons';
import { useRouter } from "expo-router"; // Ajusta según tu router
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [menuVisible, setMenuVisible] = useState(false);
  
  const router = useRouter();

  function handleContinue() {
    router.push("/screens/InfoUser/ChatMessage"); // Cambia la ruta si es necesario
  }
  

  const handleLogout = () => {
    console.log('Cerrar sesión');
    // Aquí se borra el token, se navega a login, etc.
  };

  return (
    <View style={styles.container}>
      <HeaderHome
        onMenuPress={() => setMenuVisible(!menuVisible)}
        onSettingsPress={() => console.log('Ajustes')}
      />

      {menuVisible && (
        <Menu name="usuario" onLogout={handleLogout} onClose={() => setMenuVisible(false)} />
      )}

      <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.banner}>
            <Text style={styles.bannerText}>Publicidad Aqui</Text>
          </View>
        {/* Buscador */}
        <View style={styles.searchBar}>
          <TextInput placeholder="¿Qué necesitas?" style={styles.searchInput} />
          <Feather name="search" size={20} />
        </View>

        {/* Título */}
        <Text style={styles.sectionTitle}>Servicios</Text>

        {/* Tarjetas grandes */}
        <TouchableOpacity style={styles.mainCard} onPress={handleContinue}>
          <Image source={require('@/assets/images/paseos.jpg')} style={styles.mainCardImage} />
          <Text style={styles.cardText}>Paseos</Text>
        </TouchableOpacity>

        {/* Tarjetas pequeñas */}
        <View style={styles.smallCardsRow}>
          {['Citas', 'Estadia', 'Más'].map((title, index) => (
            <TouchableOpacity key={index} style={styles.smallCard}>
              <Image
                source={require('@/assets/images/citas.jpg')}
                style={styles.smallCardImage}
              />
              <Text style={styles.smallCardText}>{title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Servicios en curso */}
        <Text style={styles.sectionTitle}>Servicios en curso</Text>
        <View style={styles.serviceCard}>
          <View style={styles.dateRow}>
            <Text style={styles.dateText}>📅 Fecha: 28/02/20</Text>
            <Text style={styles.dateText}>⏰ Hora: 9:00 am</Text>
          </View>
          <View style={styles.profileRow}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.userName}>Laura Barrios</Text>
              <Text>Servicio: Paseo</Text>
            </View>
            <Feather name="message-circle" size={20} style={{ marginLeft: 'auto' }} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 20, paddingBottom: 40 },
  menu: {
    position: 'absolute',
    top: 90,
    left: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    zIndex: 999,
    elevation: 5,
  },
  logoutText: { color: 'red', fontWeight: 'bold' },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    padding: 10,
    borderRadius: 12,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 16,
  },
  mainCard: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  mainCardImage: {
    width: '100%',
    height: 180,
  },
  cardText: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  smallCardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  smallCard: {
    width: '30%',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  smallCardImage: {
    width: '100%',
    height: 80,
  },
  smallCardText: {
    padding: 6,
    textAlign: 'center',
    fontWeight: '600',
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    elevation: 2,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  dateText: {
    fontSize: 12,
    color: '#333',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    fontWeight: 'bold',
  },
    banner: {
    backgroundColor: '#eef',
    width: '100%',
    marginBottom: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  bannerText:{
    color:"#333",
    fontWeight:"600",
  }
});
