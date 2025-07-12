import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function SettingsScreen() {
  const router = useRouter();

  const Option = ({ icon, label, onPress }: { icon: keyof typeof Feather.glyphMap, label: string, onPress?: () => void }) => (
    <TouchableOpacity style={styles.optionRow} onPress={onPress}>
      <View style={styles.optionLeft}>
        <Feather name={icon} size={20} style={styles.optionIcon} />
        <Text style={styles.optionText}>{label}</Text>
      </View>
      <Feather name="chevron-right" size={20} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.bg} onPress={() => router.back()}>
          <Feather name="arrow-left" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Configuraciones</Text>
      </View>

      <View style={styles.optionsContainer}>
        <Option icon="lock" label="Privacidad" onPress={() => {}} />
        <View style={styles.separator} />
        <Option icon="file-text" label="Terminos y condiciones" onPress={() => {}} />
        <View style={styles.separator} />
        <Option icon="info" label="Acerca de WalkPets" onPress={() => {}} />
        <View style={styles.separator} />
        <Option icon="log-out" label="Cerrar sesión" onPress={() => { /* cerrar sesiĆ³n */ }} />
      </View>
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
  titleWrapper: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  optionsContainer: {
    marginTop: 10,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionIcon: {
    marginRight: 12,
    color: "#333",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  separator: {
    height: 0.7,
    backgroundColor: "#E0E0E0",
    marginVertical: 8,
    opacity:0.7
  },
});