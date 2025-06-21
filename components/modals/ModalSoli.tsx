import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type LocationData = {
  address: string;
  latitude: number;
  longitude: number;
};
type Props = {
  visible: boolean;
  onClose: () => void;
  onSelectLocation: (location: LocationData) => void;
};
const ModalSoli: React.FC<Props> = ({ visible, onClose, onSelectLocation }) => {
  const [inputValue, setInputValue] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);
  const handleContinue = () => {
    if (inputValue.trim()) {
      onSelectLocation({
        address: inputValue.trim(),
        latitude: 0, // sin geolocalización
        longitude: 0,
      });
      setInputValue("");
      onClose();
    }
  };

  // const handleUseCurrentLocation = async () => {
  //   setLoadingLocation(true);
  //   try {
  //     const { status } = await Location.requestForegroundPermissionsAsync();

  //     if (status !== 'granted') {
  //       alert('Permiso de ubicación denegado');
  //       return;
  //     }

  //     const location = await Location.getCurrentPositionAsync({});
  //     const { latitude, longitude } = location.coords;

  //     const geocode = await Location.reverseGeocodeAsync({ latitude, longitude });
  //     const addressData = geocode[0];
  //     const readableAddress = addressData
  //       ? `${addressData.street ?? ''}, ${addressData.name ?? ''}, ${addressData.district ?? addressData.subregion ?? ''}, ${addressData.city ?? ''}`
  //       : `${latitude}, ${longitude}`;

  //     onSelectLocation({
  //       address: readableAddress,
  //       latitude,
  //       longitude,
  //     });

  //     setInputValue('');
  //     onClose();
  //   } catch (error) {
  //     alert('Error al obtener ubicación');
  //     console.error(error);
  //   } finally {
  //     setLoadingLocation(false);
  //   }
  // };

  const handleUseCurrentLocation = () => {
    const simulatedLocation: LocationData = {
      address: "calle falsa 123, ciudad prueba",
      latitude: 4.60871,
      longitude: -74.08175,
    };
    onSelectLocation(simulatedLocation);
    setInputValue("");
    onClose();
  };
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
              style={styles.modalContainer}
              behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
              <View style={styles.handle} />
              <Text style={styles.title}>Ubicación de recogida</Text>
              <Text style={styles.subtitle}>
                Escribe o escoge una dirección donde se recogerá tu mascota
              </Text>

              <View style={styles.inputContainer}>
                <Feather name="map-pin" size={16} color="#888" />
                <TextInput
                  placeholder="Escribe tu ubicación"
                  style={styles.textInput}
                  placeholderTextColor="#aaa"
                  value={inputValue}
                  onChangeText={setInputValue}
                />
              </View>

              <TouchableOpacity
                style={styles.optionRow}
                onPress={handleUseCurrentLocation}
                disabled={loadingLocation}
              >
                <Feather name="navigation" size={18} color="#000" />
                {loadingLocation ? (
                  <ActivityIndicator
                    size="small"
                    color="#000"
                    style={{ marginLeft: 10 }}
                  />
                ) : (
                  <Text style={styles.optionText}>Ubicación actual</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionRow}>
                <Feather name="home" size={18} color="#000" />
                <View>
                  <Text style={styles.optionText}>Casa</Text>
                  <Text style={styles.optionSubtext}>Cll 74 # 41 - 21</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.continueButton}
                onPress={handleContinue}
              >
                <Text style={styles.continueText}>Continuar</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalSoli;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },
  textInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  optionText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000",
  },
  optionSubtext: {
    fontSize: 13,
    color: "#777",
  },
  continueButton: {
    backgroundColor: "#246BFD",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 25,
  },
  continueText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
});
