import IconNotBuy from '@/assets/icons/IconNotBuys';
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const NotBuyScreen = () => {
  const router = useRouter();
    return(
            <SafeAreaView style={styles.container}>
              <View style={styles.header}>
                <TouchableOpacity style={styles.bg} onPress={() => router.back()} >
                  <Feather name='arrow-left' size={20} />
                </TouchableOpacity>
        
              </View>
              <View style={{ marginTop: 20, marginLeft: -10 }}>
                <Text style={styles.title}>Mis Compras</Text>
              </View>
              <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
                <View style={{marginBottom:25}}>
                <IconNotBuy />
                </View>
                <Text style={[styles.title, {fontSize:20}]}>No tienes compras registradas</Text>
                <Text style={styles.description}>mira los diferentes servicios que ofrecemos y disfrutalos</Text>

              </View>
        </SafeAreaView>
    );
};

export default NotBuyScreen;

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
  description: {
    fontSize: 16,
    color:"#696868",
    textAlign: 'center',
    fontWeight:"600",
    marginTop: 10,
  },
});