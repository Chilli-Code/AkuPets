
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';

export default function LoginScreen() {
    const router = useRouter();
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  if (!fontsLoaded) {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (email === 'usuario@demo.com' && password === '123456') {
        router.replace('/(tabs)'); // redirige a las pestañas
      } else {
        Alert.alert('Error', 'Correo o contraseña incorrectos');
      }
    }, 1000);
  };



  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3B82F6' }}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#3B82F6" />

        {/* Fondo azul con logo */}
        <View style={styles.header}>
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.logo}
          />
          <Text style={[styles.logoText, { fontFamily: 'Roboto_700Bold' }]}>Logo Aku Pets</Text>
        </View>

        {/* Fondo blanco con borderRadius */}
        <View style={styles.formContainer}>
          <Text style={[styles.title]}>¡Bienvenido!</Text>

          {/* INPUTS CON FLOATING LABEL */}
          <TextInput
            label="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            style={styles.textInput}
            theme={{
              roundness: 10,
              fonts: {
                regular: { fontFamily: 'Roboto_400Regular' },
              },
            }}
            keyboardType="email-address"
          />

          <TextInput
            label="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            mode="outlined"
            style={styles.textInput}
            theme={{
              roundness: 10,
              fonts: {
                regular: { fontFamily: 'Roboto_400Regular' },
              },
            }}
          />

          <TouchableOpacity>
            <Text style={[styles.forgotPassword, { fontFamily: 'Roboto_400Regular' }]}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={[styles.loginText]}>Iniciar Sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerButton} onPress={() => router.push('/slider')}>
            <Text style={[styles.registerText]}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B82F6', // fondo azul
  },
  header: {
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 40,
  },
    textInput: {
    backgroundColor: 'white',
    marginBottom: 15,
    borderColor: "#d1d5db",
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  title: {
    fontSize: 36,
    color:"#282B2C",
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Roboto_400Regular'
  },
  subtitle: {
    fontSize: 36,
    color: '#666',
    fontWeight: 700,
    letterSpacing:-0.2,
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    padding: 12,
    color:"#696b6b",
    fontWeight: 400,
    borderRadius: 10,
    marginBottom: 15,
  },
  forgotPassword: {
    color: '#6b6e6f',
    textAlign: 'right',
    fontWeight:500,
    marginBottom: 25,
  },
  loginButton: {
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  loginText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 500,
  },
  registerButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
  },
  registerText: {
    color: '#374151',
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 16,
  },
});
