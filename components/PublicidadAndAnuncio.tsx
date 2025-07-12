import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
export default function PublicidadAndAnuncio() {
    return (
        <View>
            <View>
            <Text style={styles.titleP}>Dato de el dia</Text>
            <ImageBackground
                source={require('@/assets/images/Publicidad/Publicidad2.jpg')}
                resizeMode='cover'
                style={styles.containerInfo}
            >
                <LinearGradient
                    colors={['transparent', 'rgba(0, 0, 0, 0.14)', '#000']}
                    style={styles.gradient}
                />
                <View style={{position:"absolute", bottom:20}}>
                <Text style={styles.descriptionText}>¿Sabes cuanto tiempo debes pasear a tu mascota?</Text>
                </View>
            </ImageBackground>
            </View>
            <View style={{marginTop:20}}>
                <Text style={styles.titleAds}>Ofertas especiales</Text>
                <Image
                    source={require('@/assets/images/Publicidad/Publicidad3.jpg')}
                    resizeMode='contain'
                    style={styles.containerInfo}>

                </Image>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titleP: {
        fontSize: 20,
        fontWeight: '700',
        marginVertical: 16,
    },
    containerInfo: {
        alignItems: "center",
        height: 237,
        paddingHorizontal:10,
        marginBottom:25
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
    },
    descriptionText: {
        position: 'relative',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    titleAds:{
        fontSize: 20,
        fontWeight: '700',
        marginBottom:-30,
    }
});