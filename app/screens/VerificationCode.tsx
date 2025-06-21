import IconVerifation from "@/assets/icons/IconVerifation";
import { useRouter } from "expo-router"; // Ajusta según tu router
import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function VerificationCode() {
  const router = useRouter();
  const [code, setCode] = useState(["", "", "", ""]);
  const [isVerified, setIsVerified] = useState(false);
  const inputs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  function handleChange(i: number, val: string) {
    if (/^\d?$/.test(val)) {
      const arr = [...code];
      arr[i] = val;
      setCode(arr);
      if (val && i < 3) inputs[i + 1].current?.focus();
    }
  }

  function handleSubmit() {
    const joined = code.join("");
    if (joined === "1234") {
      setIsVerified(true);
    } else {
      alert("Código incorrecto");
    }
  }

  function handleResend() {
    alert("Código reenviado");
  }

  function handleContinue() {
    router.push("/screens/Welcome/WelcomeMessage"); // Cambia la ruta si es necesario
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.inner}
      >
        {!isVerified ? (
          <>
            <Text style={styles.title}>Código de verificación</Text>
            <Text style={styles.subtitle}>
              Ingresa el código de 4 dígitos que enviamos.
            </Text>

            <View style={styles.codeWrapper}>
              {code.map((num, i) => (
                <TextInput
                  key={i}
                  ref={inputs[i]}
                  style={styles.codeInput}
                  maxLength={1}
                  keyboardType="number-pad"
                  value={num}
                  onChangeText={(v) => handleChange(i, v)}
                  returnKeyType={i === 3 ? "done" : "next"}
                  onSubmitEditing={() => (i === 3 ? handleSubmit() : null)}
                />
              ))}
            </View>

            <TouchableOpacity onPress={handleResend} style={styles.resend}>
              <Text style={styles.resendText}>Reenviar código</Text>
            </TouchableOpacity>

            <Text style={styles.subtitle}>
              Este proceso puede demorar unos minutos. Si no lo recibes en el
              tiempo estimado, solicita el código nuevamente.
            </Text>
          </>
        ) : (
          <View style={styles.verifiedContainer}>
            <IconVerifation />
            <Text style={[styles.verifiedText, {marginTop:30,}]}>¡Registro Exitoso!</Text>
            <Text style={[styles.subtitle2, {marginTop:-5}]}>
            Gracias por registrarte ahora hacer parte de esta comunidad,
            disfrutar de todos los servicios.
            </Text>
          </View>
        )}
      </KeyboardAvoidingView>

      {/* Botón siempre pegado abajo */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={isVerified ? handleContinue : handleSubmit}
        >
          <Text style={styles.submitBtnText}>
            {isVerified ? "Continuar" : "Verificar"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: "#fff",
  },
  back: {
    color: "#2563eb",
    marginBottom: 16,
    fontSize: 18,
  },
  inner: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 24,
    textAlign: "left",
  },
  codeWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 24,
  },
  codeInput: {
    width: 60,
    height: 70,
    borderWidth: 2,
    borderColor: "#d1d5db",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 32,
  },
  resend: {
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  resendText: {
    color: "#2563eb",
    fontSize: 12,
    fontWeight: "700",
  },
  submitButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 10,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },
  submitBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  verifiedContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  verifiedText: {
    fontSize: 28,
    color: "#282b2c",
    fontWeight: "700",
    marginBottom: 40,
    textAlign: "center",
  },
  footer: {
    paddingTop: 12,
    marginBottom:5,
    // mantén el footer abajo:
    justifyContent: "flex-end",
  },
  subtitle2:{
        fontSize: 18,
    color: "#6b7280",
    fontWeight:"600",    
    textAlign: "center",
  }
});