
import React, { useState } from "react";

import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");
interface PaymentMethod {
  id: string;
  type: string;
  name: string;
  detail: string;
  icon?: React.ReactNode;
}
export default function UserTarget() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>("mastercard");
  function AddTarjet() {
    router.push('/screens/Globals/UserTargetAdd');
  }
  const router = useRouter();
  const paymentMethods: PaymentMethod[] = [
    {
      id: "mastercard",
      type: "Master Card",
      name: "Alfonso Rodrigues",
      detail: "",
      icon: (
        <View style={{ flexDirection: "row" }}>
          <View style={styles.circleRed} />
          <View style={[styles.circleYellow, { marginLeft: -12 }]} />
        </View>
      ),
    },
    {
      id: "nequi",
      type: "Nequi",
      name: "312-345-6789",
      detail: "",
      icon: (
        <View style={styles.squarePurple}>
          <View style={styles.innerDiamond} />
        </View>
      ),
    },
    {
      id: "pse",
      type: "PSE",
      name: "",
      detail: "",
      icon: (
        <View style={styles.circleBlue}>
          <Text style={styles.pseText}>PSE</Text>
        </View>
      ),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.bg} onPress={() => router.back()} >
          <Feather name='arrow-left' size={20} />
        </TouchableOpacity>

      </View>
      <View style={{ marginTop: 20, marginLeft: -10 }}>
        <Text style={styles.title}>Métodos de pago</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        {[1].map((_, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={AddTarjet}>
            <View style={styles.cardContent}>
              <Feather name="credit-card" width={24} height={24} />
              <Text style={styles.cardText}>Agregar método de pago</Text>
            </View>
            <TouchableOpacity style={styles.plusButton}>
              <Feather name="plus" width={16} height={16} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}

        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.card,
              selectedMethod === method.id && styles.selectedCard,
            ]}
            onPress={() => setSelectedMethod(method.id)}
          >
            <View style={styles.cardContent}>
              {method.icon}
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.cardText}>{method.type}</Text>
                {!!method.name && (
                  <Text style={styles.subtext}>{method.name}</Text>
                )}
              </View>
            </View>
            <View
              style={[
                styles.radioCircle,
                selectedMethod === method.id && styles.radioCircleSelected,
              ]}
            >
              {selectedMethod === method.id && (
                <View style={styles.radioDot} />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  header: {
    paddingTop: 8,
    paddingHorizontal: 0,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  bg: {
    width: 40,
    shadowRadius: 10,
    elevation: 4, // para Android, puedes ajustar este valor
    backgroundColor: '#FFFFFF', // necesario para que se vea la sombra
    borderRadius: 20,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: 16,

  },


  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",

  },
  cardText: {
    fontWeight: "600",
    fontSize: 16,
  },
  subtext: {
    fontSize: 14,
    color: "#6B7280",
  },
  plusButton: {
    backgroundColor: "white",
    borderRadius: 999,
    padding: 8,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: "#3B82F6",
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    alignItems: "center",
    justifyContent: "center",
  },
  radioCircleSelected: {
    borderColor: "#3B82F6",
  },
  radioDot: {
    width: 12,
    height: 12,
    backgroundColor: "#3B82F6",
    borderRadius: 6,
  },
  contButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"#000",
  },
  circleRed: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#EF4444",
  },
  circleYellow: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#FACC15",
  },
  squarePurple: {
    width: 24,
    height: 24,
    backgroundColor: "#7C3AED",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  innerDiamond: {
    width: 12,
    height: 12,
    backgroundColor: "#EC4899",
    transform: [{ rotate: "45deg" }],
  },
  circleBlue: {
    width: 24,
    height: 24,
    backgroundColor: "#2563EB",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
  pseText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});
