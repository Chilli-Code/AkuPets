import IconCart from "@/assets/icons/IconCart";
import { Feather } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const { width } = Dimensions.get('window');
const ProductDetailScreen = () => {
    const router = useRouter();
    const insets = useSafeAreaInsets(); //
    
  const [quantity, setQuantity] = useState(1);
  const [showDescription, setShowDescription] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const productImages = [1, 2, 3]; // Reemplaza con tus imágenes reales

  const formatPrice = (price: number) => `$${price.toLocaleString('es-CO')}`;

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
      {/* Header */}
      
    <View style={[styles.safeHeader, {paddingTop: insets.top, }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.headerBtn}>
          <Feather name="arrow-left" size={20} />
        </TouchableOpacity>
        <Link href="/screens/Food/cartScreen" style={styles.headerBtn}>
          <IconCart size={20} />
        </Link>
      </View>
    </View>

      {/* Image Slider */}
      <View style={{ backgroundColor: '#2563EB', paddingBottom: 32 }}>
        <FlatList
          data={productImages}
          keyExtractor={(_, i) => i.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onMomentumScrollEnd={(e) => {
            const index = Math.round(e.nativeEvent.contentOffset.x / width);
            setCurrentSlide(index);
          }}
          renderItem={({ item }) => (
            <View style={[styles.imageSlide]}>
              <View style={styles.productImageBox}>
                <Image source={require('@/assets/images/Shop/ProductDetail.jpg')} style={{  width: 250, height: 250 }} resizeMode="cover" />
                {/* <Image source={require('@/assets/images/Shop/Product.jpg')} style={{ width: "100%", height: 80 }} resizeMode="contain" /> */}
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Imagen {item}</Text>
              </View>
            </View>
          )}
        />
        <View style={styles.dots}>
          {productImages.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                { opacity: i === currentSlide ? 1 : 0.4, backgroundColor: i === currentSlide ? '#fff' : '#fff' },
              ]}
            />
          ))}
        </View>
      </View>

      {/* Product Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Pedigree adultos 4kg</Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>{formatPrice(65070)}</Text>
          <Text style={styles.oldPrice}>{formatPrice(72300)}</Text>
          <Text style={styles.discount}>-10%</Text>
        </View>

        <View style={styles.caja}>
        <TouchableOpacity onPress={() => setShowDescription(!showDescription)} style={styles.descriptionToggle}>
          <Text style={styles.descriptionTitle}>Descripción del producto</Text>
          <Feather name="chevron-down" size={20} style={{ transform: [{ rotate: showDescription ? '180deg' : '0deg' }] }} />
        </TouchableOpacity>
        {showDescription && (
            <Text style={styles.descriptionText}>
            Producto alimentación para perros adultos, sabor a carne y verduras, con múltiples vitaminas que le mejoran la digestión y el ... 
            Producto alimentación para perros adultos, sabor a carne y verduras, con múltiples vitaminas que le mejoran la digestión y el ... 
          
          </Text>
        )}
        </View>
        <Text style={styles.titleCard}>Productos relacionados</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.serviceCard}>
          <View style={styles.serviceImage}>
            <View style={styles.serviceImageInner} >
              <Image
              source={require('@/assets/images/Shop/Product.jpg')}
              resizeMode="cover"
              />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.serviceHeader}>
              <View style={{ flex: 1, gap:10, }}>
                <Text style={styles.serviceTitle}>Dogourtmet adulto 8 kg</Text>
                <Text style={styles.serviceDesc}>Carne a la parrilla</Text>
              </View>
              <View style={styles.badges}>
              <View style={styles.priceRowCard}>
                <Text style={styles.currentPrice}>$67.950</Text>
                <Text style={styles.oldPriceCard}>$75.000</Text>
              </View>
              </View>
            </View>
            <View style={styles.serviceFooter}>

            </View>
          </View>

        </ScrollView>

      </View>
        {/* Quantity & Add to Cart */}
        <View style={styles.bottomRow}>
          <View style={styles.quantityControl}>
            <TouchableOpacity style={styles.qtyBtn} onPress={decreaseQuantity}>
              <Feather name="minus" size={16} />
            </TouchableOpacity>
            <Text style={styles.qty}>{quantity}</Text>
            <TouchableOpacity style={styles.qtyBtn} onPress={increaseQuantity}>
              <Feather name="plus" size={16} />
            </TouchableOpacity>
                <TouchableOpacity style={styles.addButton}>
                  <Link href="/screens/Food/productSoli">
                    <Text style={styles.addButtonText}>Agregar</Text>
                  </Link>
              </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  paddingVertical: 10,
},
  safeHeader: {
  backgroundColor: '#2563EB',
  zIndex: 10,
},
  headerBtn: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
  },
  imageSlide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    height: 280,
  },
  productImageBox: {
    width: "100%",
    height: "100%",
    // backgroundColor: '#FACC15',
    
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '3deg' }],
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  infoContainer: {
    backgroundColor: '#fff',
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    padding:16,
  },
  title: {
    fontSize: 20,
    color:"#282B2C",
    fontWeight: 'bold',
    marginBottom: 8,
  },
  titleCard:{
        fontSize: 20,
    color:"#282B2C",
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  caja:{
      borderRadius: 12,
  backgroundColor: '#FFFFFF',
  paddingLeft: 16,
  marginTop:12,

  // iOS shadow (equivalente al de Figma)
  shadowColor: 'rgba(0, 0, 0, 0.74)',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.14,
  shadowRadius: 7,

  // Android shadow (se parece, pero no es exacto)
  elevation: 5, // puedes subirlo a 6 o 7 si quieres más intensidad
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
  },
  discount: {
    backgroundColor: '#DBEAFE',
    color: '#2563EB',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 12,
    overflow: 'hidden',
  },
  descriptionToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    alignItems: 'center',
  },
  descriptionTitle: {
    fontWeight: '500',
    fontSize: 16,
    color:"#282B2C",
  },
  descriptionText: {
    color: '#6B7280',
    fontSize: 16,
    lineHeight:20,
    marginBottom: 15,
  },
bottomRow: {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: 16,
  backgroundColor: '#fff', // Opcional, para que no se mezcle con el fondo
  borderTopWidth: 1,
  borderColor: '#E5E7EB',
},
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  qtyBtn: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    padding: 8,
    borderRadius: 20,
  },
  qty: {
    fontSize: 16,
    fontWeight: '500',
    minWidth: 30,
    textAlign: 'center',
  },
  addButton: {
    width: 150,
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#3669E8',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
 serviceCard: {
    flexDirection: 'row',
    width: 350,
    paddingHorizontal: 10,
    marginBottom:10,
    gap: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.14,
  shadowRadius: 10,
  elevation: 4,
  },
  serviceImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: '#FECACA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceImageInner: {
    width: 80,
    height: 80,
    backgroundColor: '#DC2626',
    borderRadius: 4,
  },
  serviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  serviceTitle: { fontSize: 16, fontWeight: '600', color: '#111827' },
  serviceDesc: { fontSize: 14, color: '#696B6B', fontWeight:"300", },
  badges: { flexDirection: 'row', gap: 4 },
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 12,
  },
  serviceFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceRowCard: { flexDirection: 'column', alignItems: 'center', gap: 8 },
  currentPrice: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
  oldPriceCard: {
    fontSize: 14,
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
  },
  addButtonCard: {
    backgroundColor: '#03C651',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  addButtonTextCard: { color: '#fff', fontSize: 14 },
});

export default ProductDetailScreen;
