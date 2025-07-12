import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  PanResponder,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { useRouter } from 'expo-router';

import { Feather } from '@expo/vector-icons';
const { width } = Dimensions.get('window');

type Comment = {
  author: string;
  text: string;
  rating: string;
};

type Person = {
  img: string;
  name: string;
  location?: string;
  months?: number;
  calification: string;
  requests?: number;
};

const comments: Comment[] = [
  {
    author: 'Alex Lopez',
    text: 'Excelente servicio, muy contento con el trato que le dio a mi mascota, gracias...',
    rating: '5.0',
  },
  {
    author: 'Maria Perez',
    text: 'Muy buen servicio, muy profesional y amable.',
    rating: '4.8',
  },
  {
    author: 'Juan Gomez',
    text: 'Paseador muy responsable y atento.',
    rating: '4.9',
  },
];

export default function PerfilScreen() {
  const [person, setPerson] = useState<Person | null>(null);
  const [index, setIndex] = useState<number>(0);
  const translateX = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  useEffect(() => {
    // Si estás usando async storage, reemplaza esto por su API
    // Este es un mock para evitar el error
    const mockPerson: Person = {
      img: 'https://yourcdn.com/user/profile.jpg',
      name: 'Laura Barrios',
      calification: '4.9',
    };
    setPerson(mockPerson);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % comments.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) =>
      Math.abs(gestureState.dx) > 20,
    onPanResponderRelease: (_, gesture) => {
      if (gesture.dx < -100) {
        setIndex((prev) => (prev + 1) % comments.length);
      } else if (gesture.dx > 100) {
        setIndex((prev) => (prev - 1 + comments.length) % comments.length);
      }
    },
  });

  if (!person) return <Text style={{ padding: 20 }}>Cargando...</Text>;

  return (
    <View style={{backgroundColor:"#000", justifyContent:"center" }}>
      <ImageBackground source={require('@/assets/images/FondoShop.png')} resizeMode='cover' style={styles.container}>
            <View style={styles.header}>
        <TouchableOpacity style={styles.bg} onPress={() => router.back()} >
          <Feather name='arrow-left' size={20} />
        </TouchableOpacity>

      </View>

      <View style={styles.profileImageWrapper}>
        <Image source={require('@/assets/images/citas.jpg')} style={styles.profileImage} />
      </View>
      <ScrollView style={{borderTopLeftRadius:50,borderTopRightRadius:50,backgroundColor:"#fff", marginTop:100}}>

      <View style={styles.infoSection}>
        <Text style={styles.title}>{person.name}</Text>
        <View style={styles.subtitle}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg' }}
            style={styles.flag}
          />
          <Text style={styles.location}>{person.location || 'Barranquilla, Colombia'}</Text>
        </View>

        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statText}>{person.months || 3} Meses</Text>
            <Text style={styles.statLabel}>Duración</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statText}>
              {person.calification} ⭐
            </Text>
            <Text style={styles.statLabel}>Valoración</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statText}>+{person.requests || 34}</Text>
            <Text style={styles.statLabel}>Solicitudes</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Reconocimientos</Text>
        <View style={styles.recognitionRow}>
          {[
            { src: 'https://yourcdn.com/icons/cart.png', label: 'Certificado' },
            { src: 'https://yourcdn.com/icons/estadias.png', label: 'Bien calificado' },
            { src: 'https://yourcdn.com/icons/tienda.png', label: 'Muy amigable' },
            { src: 'https://yourcdn.com/icons/tienda.png', label: 'Rutas seguras' },
          ].map((item, i) => (
            <View key={i} style={styles.recognitionItem}>
              <Image source={{ uri: item.src }} style={styles.recognitionIcon} />
              <Text style={styles.recognitionLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Comentarios de usuarios</Text>
        <View {...panResponder.panHandlers}>
          <Animated.View style={[styles.commentCard, { transform: [{ translateX }] }]}>
            <View style={styles.commentHeader}>
              <Text style={styles.commentAuthor}>{comments[index].author}</Text>
              <Text style={styles.commentRating}>{comments[index].rating} ⭐</Text>
            </View>
            <Text style={styles.commentText}>{comments[index].text}</Text>
          </Animated.View>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Seleccionar paseador</Text>
        </Pressable>
      </View>

      </ScrollView>
    </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    display:"flex",
    justifyContent:"center",
  },
    header: {  
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
  backgroundImage: {
    width: '100%',
    height: 250,
  },
  profileImageWrapper: {
    position: 'absolute',
    top: 110,
    left: width / 2 - 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    padding: 5,
    zIndex:55,
    elevation: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#fff',
  },
  infoSection: {
   marginTop: 80,
    paddingHorizontal: 20,
    alignItems: 'center',


  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#282b2c',
    marginBottom: 5,
  },
  subtitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  location: {
    fontSize: 14,
    color: '#696b6b',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
    paddingBottom: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#282b2c',
  },
  statLabel: {
    fontSize: 12,
    color: '#696b6b',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
    color: '#282b2c',
    alignSelf: 'center',
  },
  recognitionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  recognitionItem: {
    alignItems: 'center',
    width: 80,
    marginVertical: 10,
  },
  recognitionIcon: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  recognitionLabel: {
    fontSize: 12,
    color: '#282b2c',
    textAlign: 'center',
  },
  commentCard: {
    width: width - 40,
    padding: 15,
    height:100,
    backgroundColor: '#fff',
    borderRadius: 10,
   // shadowColor: '#00000024',
   // shadowOffset: { width: 0, height: 2 },
   // shadowOpacity: 0.2,
   // shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
          // iOS shadow (equivalente al de Figma)
  shadowColor: 'rgba(0, 0, 0, 0.36)',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.4,
  shadowRadius: 4,

  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  commentAuthor: {
    fontSize: 17,
    fontWeight: '700',
    color: '#282b2c',
  },
  commentRating: {
    fontSize: 13,
    color: '#696b6b',
  },
  commentText: {
    fontSize: 14,
    color: '#696b6b',
  },
  button: {
    marginTop: 14,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom:20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
});