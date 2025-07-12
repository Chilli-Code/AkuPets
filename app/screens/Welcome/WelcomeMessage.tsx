import IconWelcome from "@/assets/icons/IconWelcome";
import { useRouter } from "expo-router"; // Ajusta según tu router
import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

type WelcomeMessageProps = {
  onRegisterPress: () => void;
};

export default function WelcomeMessage({ onRegisterPress }: WelcomeMessageProps) {
  function handleContinue() {
    router.push("/screens/Welcome/AddPets"); 
  }
    const router = useRouter();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Aku Pets!</Text>
        <View style={{ justifyContent:"center", alignItems:"center", marginTop:50}}>
        <IconWelcome />
        <Text style={styles.titleP}>No Tienes mascotas registradas</Text>
        <Text style={styles.description}>
         Agrega tus mascotas y disfruta 
        </Text>
        <Text style={styles.description}>
          de los servicios
        </Text>

      </View>
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    
  },
  content: {
    marginTop: 40,
    alignItems: 'center',
  },
    titleP: {
    fontSize: 24,
    fontWeight: "700",
    marginTop:25,
    marginBottom: 20,
    color:"#000",
    textAlign: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#14ade0',
  },

  description: {
    fontSize: 17,
    color: '#ccc',
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

});