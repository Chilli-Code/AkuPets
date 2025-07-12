
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Dimensions,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

// Importa tus modales personalizadas
import ModalExampleTarjet1 from "../../../components/modals/ModalExampleTarjet1";
import ModalExampleTarjet2 from "../../../components/modals/ModalExampleTarjet2";
import ModalExampleTarjet3 from "../../../components/modals/ModalExampleTarjet3";

const { width } = Dimensions.get("window");

export default function UserFormAddTarjet() {
  const router = useRouter();

  const [showModal1, setShowModal1] = useState(true); // tarjeta
  const [showModal2, setShowModal2] = useState(true); // fecha
  const [showModal3, setShowModal3] = useState(true); // cvv

  const [visibleModal1, setVisibleModal1] = useState(false);
  const [visibleModal2, setVisibleModal2] = useState(false);
  const [visibleModal3, setVisibleModal3] = useState(false);

  const handleFocus = (field: "card" | "date" | "cvv") => {
    if (field === "card" && showModal1) {
      setVisibleModal1(true);
      setShowModal1(false);
    } else if (field === "date" && showModal2) {
      setVisibleModal2(true);
      setShowModal2(false);
    } else if (field === "cvv" && showModal3) {
      setVisibleModal3(true);
      setShowModal3(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.bg} onPress={() => router.back()}>
          <Feather name="arrow-left" size={20} />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Text style={styles.title}>Agrega tu tarjeta</Text>
      </View>

      {/* Input tarjeta */}
        <Text>Numero De la Tarjeta</Text>
      <View style={styles.inputContainer}>
        <Feather name="credit-card" size={20} style={styles.icon} />
        <TextInput
          keyboardType="numeric"
          maxLength={19}
          placeholder="0000 0000 0000 0000"
          style={styles.input}
          onFocus={() => handleFocus("card")}
        />
        <Feather name="camera" size={20} />
      </View>

      {/* Fecha y CVV */}
      <View style={styles.row}>
        <View style={styles.inputBlock}>
        <Text>Fecha de vencimiento</Text>
        <View style={styles.halfInputContainer}>
          <TextInput
            keyboardType="numeric"
            placeholder="MM/AA"
            maxLength={5}
            style={styles.input}
            onFocus={() => handleFocus("card")}
          />
          <Feather name="info" size={18} />
        </View>
        </View>

        <View style={styles.inputBlock}>
        <Text>Codigo de seguridad</Text>
        <View style={styles.halfInputContainer}>
          <TextInput
            keyboardType="numeric"
            placeholder="CVV"
            maxLength={3}
            style={styles.input}
            onFocus={() => handleFocus("cvv")}
          />
          <Feather name="info" size={18} />
        </View>
        </View>
      </View>

      {/* MODALES PERSONALIZADAS */}
      <ModalExampleTarjet1
        visible={visibleModal1}
        onClose={() => setVisibleModal1(false)}
        onContinue={() => setVisibleModal1(false)}
      />
      <ModalExampleTarjet2
        visible={visibleModal2}
        onClose={() => setVisibleModal2(false)}
        onContinue={() => setVisibleModal2(false)}
      />
      <ModalExampleTarjet3
        visible={visibleModal3}
        onClose={() => setVisibleModal3(false)}
        onContinue={() => setVisibleModal3(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 8,
  },
  bg: {
    width: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 10,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: "100%",
    gap: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  icon: {
    color: "#333",
  },
  inputBlock:{
    width:"48%"
  }
});