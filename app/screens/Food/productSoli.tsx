import CalendarIcon from "@/components/icons/CalendarIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CheckboxSquare from "../../../components/modals/CheckboxSquare";
import ModalCalendar from "../../../components/modals/ModalCalendar";
import ModalShopPayment from "../../../components/modals/ModalShopPayment";
import ModalSoli from "../../../components/modals/ModalSoli";
import ModalSuccessfulPayment from "../../../components/modals/ModalSuccessfulPayment";

type LocationData = {
  address: string;
  latitude: number;
  longitude: number;
};
const RideService: React.FC = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showConfimation, setShowConfirmation] = useState(false);
  const [location, setLocation] = useState<LocationData | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const insets = useSafeAreaInsets();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const isStep1Completed = location !== null;
  const isStep2Completed = selectedDate !== null;

  const stepsCompleted = [isStep1Completed, isStep2Completed].filter(
    Boolean
  ).length;
  const totalSteps = 2;
  const progressPercentage = (stepsCompleted / totalSteps) * 100;

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
    : "Selecciona una fecha";

  const handlePay = () => {
    setShowPaymentModal(false);
    setTimeout(() => {
      setShowSuccessModal(true);
    }, 300)
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[{ paddingTop: insets.top }]}>
        <Text style={styles.stepText}>
          Paso {stepsCompleted}/{totalSteps}
        </Text>
      </View>

      <View style={styles.progressBarBackground}>
        <View
          style={[styles.progressBarFill, { width: `${progressPercentage}%` }]}
        />
      </View>

      <Text style={styles.title}>Información para solicitud</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => setIsModalVisible(true)}
      >
        <View style={styles.cardContent}>
          <View style={styles.infoRow}>
            <LocationIcon />
            <View style={styles.textContainer}>
              <Text style={styles.label}>Ubicación</Text>
              <Text style={styles.value}>
                {location?.address || "Selecciona una ubicación"}
              </Text>
            </View>
          </View>
          <CheckboxSquare checked={isStep1Completed} />
        </View>
      </TouchableOpacity>
      <ModalSoli
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSelectLocation={(loc) => {
          setLocation(loc);
          setIsModalVisible(false);
        }}
      />

      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={[styles.card, !isStep1Completed && styles.disabledCard]}
          onPress={() => setShowCalendar(true)}
          disabled={!isStep1Completed}
        >
          <View style={styles.cardContent}>
            <View style={styles.infoRow}>
              <CalendarIcon />
              <View style={styles.textContainer}>
                <Text style={styles.label}>Fecha de envío</Text>
                <Text style={styles.value}>
                  {isStep2Completed
                    ? formattedDate
                    : "Selecciona una fecha y hora"}
                </Text>
              </View>
            </View>
            <CheckboxSquare checked={isStep2Completed} />
          </View>
        </TouchableOpacity>
      </View>

      <ModalCalendar
        visible={showCalendar}
        onClose={() => setShowCalendar(false)}
        onSave={(data) => {
          const [year, month, day] = data.date.split("-").map(Number);
          const localDate = new Date(year, month - 1, day);
          setSelectedDate(localDate);
          setShowCalendar(false);
          console.log("Fecha seleccionada:", data);
        }}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => console.log("Cancelar")}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.submitButton,
            !(isStep1Completed && isStep2Completed) &&
            styles.submitButtonDisabled,
          ]}
          onPress={() => {
            if (isStep1Completed && isStep2Completed && location) {
              const isValidCoords = location.latitude !== 0 && location.longitude !== 0;

              if (!isValidCoords) {
                alert("La dirección ingresada no es válida. Por favor selecciona una desde el mapa.");
                return;
              }

              // Mostrar modal de pago
              setShowPaymentModal(true);

              // Si también necesitas enviar o guardar datos:
              const data = {
                address: location.address,
                coords: {
                  lat: location.latitude,
                  lng: location.longitude,
                },
                date: formattedDate,
              };
              console.log("Datos completados para guardar/enviar:", JSON.stringify(data, null, 2));
            }
          }}



          disabled={!(isStep1Completed && isStep2Completed)}
        >
          <Text style={styles.submitButtonText}>Pagar</Text>
        </TouchableOpacity>

        <ModalShopPayment
          visible={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          onPlay={handlePay}
        />
        <ModalSuccessfulPayment
          visible={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          onContinue={() => {
            setShowSuccessModal(false);
            //     // Ir a otra pantalla o acción
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default RideService;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFF",
    flex: 1,
  },
  stepText: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 10,
    color: "#4a5568",
  },
  progressBarBackground: {
    backgroundColor: "rgba(54, 105, 232, 0.3)",
    height: 8,
    borderRadius: 50,
    overflow: "hidden",
    marginBottom: 20,
  },
  progressBarFill: {
    backgroundColor: "#3669e8",
    height: "100%",
    borderRadius: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
    color: "#2d3748",
  },
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  disabledCard: {
    opacity: 0.4,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10, // o usa margin si no tienes gap
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 2, // separación desde el checkbox
  },

  textContainer: {
    marginLeft: 8,
    maxWidth: 200, // O el ancho que quieras para evitar que se extienda
  },

  label: {
    fontWeight: "400",
    color: "#696b6b",
    fontSize: 17,
  },
  value: {
    color: "#282b2c",
    fontWeight: "700",
    fontSize: 15,
    marginTop: 4,
    flexWrap: "wrap",
    flexShrink: 1, // <-- Muy importante
    // <-- Opcional si quieres limitarlo a 2 líneas
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 30,
    justifyContent: "space-between",
  },
  cancelButton: {
    flex: 1,
    borderColor: "#aaa",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
    marginRight: 5,
  },
  cancelButtonText: {
    textAlign: "center",
    fontWeight: "500",
    color: "#333",
  },
  submitButton: {
    flex: 1,
    backgroundColor: "#3669e8",
    padding: 12,
    borderRadius: 8,
  },
  submitButtonDisabled: {
    opacity: 0.4,
  },
  submitButtonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
  },
});
