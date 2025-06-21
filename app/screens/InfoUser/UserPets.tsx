import React from "react";
import {
  Dimensions,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function UserPets() {
  const router = useRouter();

  function handleAddPets(){
    router.push('/screens/Welcome/AddPets');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.containerPets}>
          <Text style={styles.title}>Tus Mascotas</Text>
          <Text style={styles.subtitle}>Agrega o edita tus mascotas</Text>
        </View>

        {/* Seccion Perros */}
        <View style={styles.containerPetsPhoto}>
          <View style={styles.containerSub}>
            <Text style={styles.titleSub}>Perros</Text>
            <TouchableOpacity>
              <Feather name="chevron-right" size={20} color="#6b7280" />
              <Text style={styles.link}>Ver Mas</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
            <TouchableOpacity style={styles.smallCard}>
              <ImageBackground
                source={require("@/assets/images/citas.jpg")}
                style={styles.smallCardImage}
              >
                <LinearGradient colors={["transparent", "rgba(0,0,0,0.6)", "#000000ba"]} style={styles.gradient} />
                <TouchableOpacity style={styles.iconDel}>
                  <Feather name="trash-2" size={20} color="#d7083f" />
                </TouchableOpacity>
                <View style={{ position: "relative", top: 95 }}>
                  <Text style={styles.nameDog}>Tobias</Text>
                  <Text style={styles.InfoRaza}>Pitbull</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Seccionn Gatos */}
        <View style={styles.containerPetsPhoto}>
          <View style={styles.containerSub}>
            <Text style={styles.titleSub}>Gatos</Text>
            <TouchableOpacity>
              <Feather name="chevron-right" size={20} color="#6b7280" />
              <Text style={styles.link}>Ver Mas</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
            <TouchableOpacity style={styles.smallCard}>
              <ImageBackground
                source={require("@/assets/images/citas.jpg")}
                style={styles.smallCardImage}
              >
                <LinearGradient colors={["transparent", "rgba(0,0,0,0.6)", "#000000ba"]} style={styles.gradient} />
                <TouchableOpacity style={styles.iconDel}>
                  <Feather name="trash-2" size={20} color="#d7083f" />
                </TouchableOpacity>
                <View style={{ position: "relative", top: 95 }}>
                  <Text style={styles.nameDog}>Mishi</Text>
                  <Text style={styles.InfoRaza}>Persa</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>

        <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={handleAddPets}
        >
          <Text style={styles.cancelButtonText}>Agregar Mascota</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ styles.submitButton}>
          <Text style={styles.submitButtonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  containerPets: {
    width: "100%",
    padding: 20,
  },
  containerPetsPhoto: {
    marginBottom: 20,
  },
  containerSub: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#282B2C",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 24,
    fontWeight: "600",
  },
  titleSub: {
    fontSize: 21,
    fontWeight: "700",
    color: "#282B2C",
  },
  link: {
    fontSize: 14,
    color: "#6b7280",
    fontWeight: "600",
  },
  smallCard: {
    width: width * 0.4,
    height: 147,
    marginRight: 12,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 2,
  },
  smallCardImage: {
    width: "100%",
    height: 147,
  },
  iconDel: {
    position: "absolute",
    right: 3,
    top: 5,
    zIndex: 2,
  },
  nameDog: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    paddingLeft: 10,
  },
  InfoRaza: {
    fontSize: 13,
    color: "#c8cbd1",
    paddingLeft: 13,
    fontWeight: "600",
  },
  
  buttonContainer: {
    flexDirection: "row",
    paddingHorizontal:10,
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
    submitButtonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
  },
});