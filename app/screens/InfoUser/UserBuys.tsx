import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ImageBackground, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const UserBuys = () => {
  const router = useRouter();

  function PaseosRouter(){
    router.push ('/screens/InfoUser/UserBuyPaseos');
  }

  function NotBuys(){
    router.push('/screens/InfoUser/NotBuy');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.bg} onPress={() => router.back()} >
          <Feather name='arrow-left' size={20} />
        </TouchableOpacity>

      </View>
      <View style={{ marginTop: 20, marginLeft: -10 }}>
        <Text style={styles.title}>Mis Compras</Text>
      </View>

      <ScrollView style={{ marginTop: 20 }}>
        <TouchableOpacity style={styles.mainCard} onPress={PaseosRouter}>
          <ImageBackground source={require('@/assets/images/paseos.jpg')} style={styles.mainCardImage} >
            <LinearGradient
              colors={['transparent', 'rgba(0, 0, 0, 0.43)', '#202020']}
              style={styles.gradient}
            />
            <Text style={styles.cardText}>Paseos</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainCard} onPress={NotBuys}>
          <ImageBackground source={require('@/assets/images/citas.jpg')} style={styles.mainCardImage} >
            <LinearGradient
              colors={['transparent', 'rgba(0, 0, 0, 0.43)', '#202020']}
              style={styles.gradient}
            />
            <Text style={styles.cardText}>Veterinarias</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainCard}>
          <ImageBackground source={require('@/assets/images/TiendaImg.png')} style={styles.mainCardImage} >
            <LinearGradient
              colors={['transparent', 'rgba(0, 0, 0, 0.43)', '#202020']}
              style={styles.gradient}
            />
            <Text style={styles.cardText}>Tienda</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainCard}>
          <ImageBackground source={require('@/assets/images/estadia2.jpg')} style={styles.mainCardImage} >
            <LinearGradient
              colors={['transparent', 'rgba(0, 0, 0, 0.43)', '#202020']}
              style={styles.gradient}
            />
            <Text style={styles.cardText}>Estadia</Text>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>

    </SafeAreaView>
  );
};
export default UserBuys;


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
  mainCard: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  mainCardImage: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: 150,
  },
  cardText: {
    position: 'relative',
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

})
