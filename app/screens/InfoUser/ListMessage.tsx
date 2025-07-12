import React from "react";
import {
    Dimensions,
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function ListMessage() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.bg} onPress={() => router.back()} >
                    <Feather name='arrow-left' size={20} />
                </TouchableOpacity>

            </View>
            <View style={{ marginTop: 20, marginLeft: -10 }}>
                <Text style={styles.title}>Mis Mensajes</Text>
            </View>

            <ScrollView style={{marginTop:20}}>
                <Link href="/screens/InfoUser/ChatMessage" style={styles.productCard} >
                <View style={styles.productCaard}>
                    <View style={styles.productImageWrapper}>
                        <Image source={require('@/assets/images/PaseadorList.jpg')} style={styles.productImage} resizeMode="contain" />
                        
                    </View>

                    <View style={styles.productInfo}>
                        <View style={styles.productHeader}>
                            <View>
                                <Text style={styles.productName}>
                                    Laura Barrios
                                </Text>
                                <View style={{flexDirection:"row", display:"flex", justifyContent:"flex-start", alignItems:"center",}}>
                                <Text style={{fontWeight:"300"}}>Servicio: </Text>
                                <Text style={styles.productDescription}>Completado</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center',display:"flex",justifyContent:"center" }}>
                                <Feather name="arrow-right" size={22}/>
                            </View>
                        </View>
                    </View>
                </View>
            </Link>
            </ScrollView>

              
         
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

productCaard:{
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: 5,
  marginBottom: 0,
  borderRadius: 12,
  backgroundColor: '#FFFFFF',
  gap: 12,
},
productCard: {
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: 12,
  marginBottom: 16,
  borderRadius: 12,
  backgroundColor: '#FFFFFF',

  // iOS shadow (equivalente al de Figma)
  shadowColor: 'rgba(0, 0, 0, 0.74)',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.14,
  shadowRadius: 7,

  // Android shadow (se parece, pero no es exacto)
  elevation: 5, // puedes subirlo a 6 o 7 si quieres más intensidad

  gap: 12,
},


  productImageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: 60,
    borderRadius: 30,
    height: 60,
  },
  productInfo: { flex: 1 },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 17,
    fontWeight: '700',
    paddingTop:8,
    color: '#111827',
  },
  productDescription: {
    fontSize: 13,
    fontWeight:"600",
    color: '#000',
  },

  

});

