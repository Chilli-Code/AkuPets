import IconSuccesPets from "@/assets/icons/IconSuccesPets";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AddPetsSucces = () => {
  const router = useRouter();

  function handleContinue(){
    router.push("/screens/InfoUser/UserPets")
  }
  return (
    <ImageBackground source={require('@/assets/images/PetsSucces.jpg')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.6)', '#000']}
            style={styles.gradient}
        />
        <IconSuccesPets />
        
      <Text style={styles.title}>Registro Exitoso</Text>
      <Text style={styles.subtitle}>Ahora puedes disfrutar de todos nuestros servicios</Text>
      <View style={styles.containerB}>
      <TouchableOpacity style={ styles.submitButton} onPress={handleContinue}>
        <Text style={styles.submitButtonText}>Continuar</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default AddPetsSucces;


const styles = StyleSheet.create({

  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: 30,
    color:"#fff",
    fontWeight: '700',
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'Roboto_400Regular'
  },
    subtitle: {
    fontSize: 18,
    marginTop: 20,
    color: '#fff',
    fontWeight: 400,
    letterSpacing:-0.2,
    textAlign: 'center',
    marginBottom: 30,
  },
    submitButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 10,
    marginHorizontal:10,
    borderRadius: 12,
    alignItems: "center",
  },
    submitButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  containerB:{
    position:"absolute",
    bottom:5,
    left:0,
    right:0,
    width:"100%",
    marginBottom:10,
    paddingHorizontal:18,
  }
});
