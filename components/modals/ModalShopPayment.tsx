import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Feather } from '@expo/vector-icons';

interface PaymentMethod {
  id: string;
  type: string;
  name: string;
  detail: string;
  icon?: React.ReactNode;
}

interface ModalShopPaymentProps {
  visible: boolean;
  onClose: () => void;
  onPlay: () => void;
}

const ModalShopPayment: React.FC<ModalShopPaymentProps> = ({
  visible,
  onClose,
  onPlay,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>("mastercard");

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
    <Modal visible={visible} animationType="slide" transparent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <KeyboardAvoidingView
              style={styles.modalContainer}
              behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
              <View style={styles.handle} />

              {/* === TU CONTENIDO ORIGINAL COMIENZA AQUÍ === */}
              <View style={styles.container}>

                <ScrollView contentContainerStyle={styles.content}>
                  <Text style={styles.title}>Tu compra</Text>
                  <Text style={styles.subtitle}>Selecciona un método de pago</Text>

                  <View style={styles.divider} />

                  <Text style={styles.sectionTitle}>Resumen del pago</Text>
                  <View style={styles.row}>
                    <View style={styles.rowLeft}>
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>-30%</Text>
                      </View>
                      <Text style={styles.lineThrough}>$12.000</Text>
                      <Text style={styles.price}>$8.400</Text>
                    </View>
                    <Text style={styles.rightText}>Paseo básico</Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.rowBetween}>
                    <Text style={styles.sectionTitle}>Total a pagar:</Text>
                    <Text style={styles.price}>$8.400</Text>
                  </View>

                  <View style={styles.divider} />

                  <Text style={styles.sectionTitle}>Método de pago</Text>
                  
                  {[1, 2].map((_, index) => (
                    <TouchableOpacity key={index} style={styles.card}>
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

                </ScrollView>
                <View style={styles.contButton}>
                  <TouchableOpacity style={styles.payButton} onPress={onPlay}>
                    <Text style={styles.payButtonText}>Realizar pago</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.bottomIndicator} />
              </View>
              {/* === TU CONTENIDO ORIGINAL TERMINA AQUÍ === */}
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalShopPayment;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    maxHeight: "90%",
        flex: 1,

  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 10,
  },
  // 👇 Todo lo demás se mantiene tal cual lo tenías:
  container: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: "#6B7280",
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#D1D5DB",
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  rightText: {
    fontSize: 16,
  },
  badge: {
    backgroundColor: "#2563EB",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
  lineThrough: {
    textDecorationLine: "line-through",
    color: "#9CA3AF",
    marginLeft: 6,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 6,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
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
    fontWeight:"600",
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
  contButton:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    // backgroundColor:"#000",
  },
  payButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 12,
    width:"90%",
    borderRadius: 10,
    marginTop: 16,
  },
  payButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  bottomIndicator: {
    alignSelf: "center",
    height: 4,
    width: 120,
    backgroundColor: "#9CA3AF",
    borderRadius: 2,
    marginVertical: 12,
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