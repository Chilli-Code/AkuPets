import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const { width } = Dimensions.get('window');

const services = [
  { name: 'Alimentos', image: require('@/assets/images/Alimentos.png') },
  { name: 'Juguetes', image: require('@/assets/images/Juguetes.png') },
  { name: 'Medicamentos', image: require('@/assets/images/Medicamentos.png') },
  { name: 'Accesorios', image: require('@/assets/images/Accesorios.png') },
  { name: 'Comodidad', image: require('@/assets/images/Comodidad.png') },
  { name: 'Tienda', image: require('@/assets/images/TiendaImg.png') },
];

const reviews = [
  {
    name: 'Alex Lopez',
    rating: 5.0,
    comment: 'Lorem ipsum dolor sit amet consectetur. Natoque pipssum dolo.....',
  },
  {
    name: 'Mateo',
    rating: 5.0,
    comment: 'Lorem ipsum dolor sit amet consectetur. Natoque',
  },
];

export default function PetStoreProfile() {
return (
  <View
    style={{ flex: 1 }}
  >
    <SafeAreaView style={styles.safeArea}>
              <TouchableOpacity style={styles.backButton}>
          <Feather name="arrow-left" size={20} color="#fc0000" />
        </TouchableOpacity>
    </SafeAreaView>
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }} style={styles.container}>
      <ImageBackground 
      source={require('@/assets/images/citas.jpg')}
      style={styles.topBackground}
      resizeMode='cover'
      blurRadius={1}
      >
      {/* Header (sin imagen ahora, ya que está en el fondo) */}
      <View style={styles.header}>
        <View style={styles.logoWrapper}>
          <View style={styles.logoCircle}>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.logoBars}>
                <View style={styles.bar} />
                <View style={styles.bar} />
              </View>
              <Text style={styles.logoTitle}>HOME PETS</Text>
              <Text style={styles.logoSubtitle}>Friendly animals</Text>
            </View>
          </View>
        </View>
      </View>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.storeInfo}>
          <Text style={styles.storeName}>Home pets</Text>
          <View style={styles.locationRow}>
            <View style={styles.bar} />
            <Text style={styles.locationText}>Barranquilla, Colombia</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Meses</Text>
          </View>
          <View style={styles.statItem}>
            <View style={styles.ratingRow}>
              <Text style={styles.statValue}>5.0</Text>
              <Feather name="star" size={18} color="#facc15" />
            </View>
            <Text style={styles.statLabel}>Valoración</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>+34</Text>
            <Text style={styles.statLabel}>Solicitudes</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Ubicación</Text>
        <View style={styles.locationCard}>
          <View style={styles.locationInfo}>
            <Feather name="map-pin" size={20} color="#3b82f6" />
            <View>
              <Text style={styles.addressLabel}>Dirección</Text>
              <Text style={styles.addressValue}>Cl 21 # 21 - 31</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.mapButton}>
            <Text>Ver mapa</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Servicios</Text>
        <View style={styles.grid}>
          {services.map((service, i) => (
            <ImageBackground key={i} style={styles.card} source={service.image}>
              
              <TouchableOpacity style={styles.cardLabelWrapper}>
                <Text style={styles.cardLabel}>{service.name}</Text>
              </TouchableOpacity>
            </ImageBackground>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Comentarios de usuarios</Text>
        {reviews.map((review, i) => (
          <View key={i} style={styles.reviewRow}>
            <View style={styles.avatar} />
            <View style={styles.reviewContent}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewName}>{review.name}</Text>
                <View style={styles.ratingRow}>
                  <Feather name="star" size={14} color="#facc15" />
                  <Text style={styles.reviewRating}>{review.rating}</Text>
                </View>
              </View>
              <Text style={styles.reviewComment}>{review.comment}</Text>
            </View>
          </View>
        ))}
      {/* </View> */}
  
      </View>

    </ScrollView>
  </View>
);

}

const styles = StyleSheet.create({
  container: { flex: 1},
  header: { height: 200, position: 'relative' },
  headerImage: { width: '100%', height: '100%', position: 'absolute' },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  backButton: {

    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 8,
    borderRadius: 25,
  },
  safeArea:{
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    zIndex:10,
    padding:16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
topBackground:{
  height:250,
  width:"100%",
  position:"relative",
},
  logoWrapper: {
    position: 'absolute',
    bottom: -36,
    left: width / 2 - 48,
    zIndex:1,
  },
  logoCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#111827',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#fff',
  },
  logoBars: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 4,
  },
  bar: {
    width: 12,
    height: 16,
    backgroundColor: '#facc15',
    borderRadius: 2,
    marginHorizontal: 2,
  },
  logoTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
  logoSubtitle: {
    color: '#d1d5db',
    fontSize: 10,
    textAlign: 'center',
  },
  content: {
    marginTop:-20,
    backgroundColor:"#FFFFF",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingTop:64,
    paddingHorizontal: 20,
   
  },
  storeInfo: { alignItems: 'center', marginBottom: 24 },
  storeName: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  locationRow: { flexDirection: 'row', alignItems: 'center' },
  locationText: { color: '#4b5563', marginLeft: 8 },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  statItem: { alignItems: 'center' },
  statValue: { fontSize: 24, fontWeight: 'bold' },
  statLabel: { color: '#6b7280', fontSize: 12 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  locationCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  locationInfo: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  addressLabel: { fontSize: 12, color: '#6b7280' },
  addressValue: { fontSize: 14, fontWeight: '500' },
  mapButton: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 50,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  card: {
    width: (width - 60) / 2,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    marginBottom: 12,
  },

  cardLabelWrapper: {
    position: 'relative',
    height:"100%",
    display:"flex",
    justifyContent:"center",
    textAlign:"center",
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 4,
    alignItems: 'center',
  },
  cardLabel: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
  reviewRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: '#d1d5db',
    borderRadius: 20,
  },
  reviewContent: {
    flex: 1,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  reviewName: { fontWeight: '500' },
  reviewRating: { fontSize: 12 },
  reviewComment: { color: '#6b7280', fontSize: 13 },
});