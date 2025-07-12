import IconTarjet from "@/assets/icons/IconTarjet";
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
    View
} from "react-native";

const { width } = Dimensions.get("window");


export default function UserTargetAdd() {
    const router = useRouter();
function AddTarjetForm(){
    router.push('/screens/Globals/UserFormAddTarjet');
}

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.bg} onPress={() => router.back()} >
                    <Feather name='arrow-left' size={20} />
                </TouchableOpacity>

            </View>
            <View style={{ marginTop: 20, marginLeft: -10, marginBottom:20 }}>
                <Text style={styles.title}>Mis Tarjetas</Text>
            </View>
            <View style={{flex:1, }}>
                <View style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:"row", marginBottom:10}}>
                    <Text style={styles.titleCard}>Tarjeta 1</Text>
                    <TouchableOpacity style={{flexDirection:"row", marginRight:6}}>
                        <Text style={{marginRight:10}}>Eliminar</Text>
                        <Feather name="trash-2" size={20} color="#000"/>
                    </TouchableOpacity>
                </View>
                <IconTarjet />
            </View>
            <TouchableOpacity style={styles.containerAdd} onPress={AddTarjetForm}>
                <Feather name='plus' size={25} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: "#FFFFF",
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
    titleCard:{
        fontSize: 20,
        fontWeight: '400',
        paddingHorizontal: 5,
    },
    containerAdd:{
        position:"absolute",
        right:15,
        bottom:15,
        width:45,
        textAlign:"center",
        height:45,
        shadowRadius: 10,
        elevation: 4, // para Android, puedes ajustar este valor
        backgroundColor: '#FFFFFF', // necesario para que se vea la sombra
        borderRadius: 20,
        padding: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});