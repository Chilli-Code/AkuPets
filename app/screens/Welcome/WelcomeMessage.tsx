import { useRouter } from "expo-router"; // Ajusta según tu router
import React from 'react';

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type WelcomeMessageProps = {
  onRegisterPress: () => void;
};

export default function WelcomeMessage({ onRegisterPress }: WelcomeMessageProps) {
  function handleContinue() {
    router.push("/screens/Welcome/AddPets"); // Cambia la ruta si es necesario
  }
    const router = useRouter();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Aku Pets!</Text>

        <Image
          source={require('@/assets/images/slider2.jpg')} // Cambia la ruta según tu proyecto
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.titleP}>No Tienes mascotas registradas</Text>
        
        <Text style={styles.description}>
         Agrega tus mascotas y disfruta 
        </Text>
        <Text style={styles.description}>
          de los servicios
        </Text>
          <TouchableOpacity style={{marginTop: 20}}>
          <Text style={styles.skip}>Omitir</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Registrar mascota</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between', // Espacio entre contenido y botón abajo
    paddingHorizontal: 20,
  },
  content: {
    marginTop: 40,
    alignItems: 'center',
  },
    titleP: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 25,
    textAlign: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#14ade0',
  },
  image: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  description: {
    fontSize: 17,
    color: '#666',
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
    skip: {
    color: '#4283d2',
    fontSize: 14,
  },
});