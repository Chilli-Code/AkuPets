import { Link, useRouter } from "expo-router";
import { Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Registro</Text>
        <Text style={styles.subtitle}>Ingresa los datos para registrar tu cuenta.</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nombre"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Número de teléfono"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Confirmar Contraseña"
            value={confPassword}
            onChangeText={setConfPassword}
            secureTextEntry={!showConfPassword}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setShowConfPassword(!showConfPassword)} style={styles.eyeButton}>
            {showConfPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Link href="/screens/VerificationCode" style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 8,
    paddingHorizontal: 24,
  },
  backButton: {
    paddingVertical: 8,
    alignSelf: "flex-start",
  },
  backText: {
    fontSize: 24,
    color: "#282B2C",
  },
  container: {
    padding: 24,
    paddingTop: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#282B2C",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#6B6E6F",
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 14,
    position: "relative",
  },
  input: {
    height: 50,
    borderColor: "#d1d5db",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    backgroundColor: "#fff",
  },
  eyeButton: {
    position: "absolute",
    right: 12,
    top: Platform.OS === "android" ? 12 : 14,
  },
  footer:{
    padding:0,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 10,
    width:"90%",
    alignItems: "center",
    // marginTop: 16,
    marginBottom: 10, // espacio extra para scroll
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign:"center",
    fontWeight: "500",
  },
});