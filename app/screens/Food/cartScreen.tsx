import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const CartScreen = () => {
  const [quantity, setQuantity] = useState(1);
    const router = useRouter();
const insets = useSafeAreaInsets(); //
  const increase = () => setQuantity(q => q + 1);
  const decrease = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View  style={[styles.header, {paddingTop: insets.top, }]} >
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Canasta</Text>
        <View style={{ width: 24 }} /> 
      </View>

      {/* Body */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Image
            source={require('@/assets/images/Shop/Product.jpg')}
            style={styles.productImage}
            resizeMode="cover"
          />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>Pedigree adulto 4kg</Text>
            <Text style={styles.productSubtitle}>Pollo adultos</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>$31.705</Text>
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>15%</Text>
              </View>
              <Text style={styles.oldPrice}>$37.300</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity>
                <Feather name="trash-2" size={20} />
              </TouchableOpacity>
              <View style={styles.qtyBox}>
                <TouchableOpacity onPress={decrease}>
                  <Feather name="minus" size={16} />
                </TouchableOpacity>
                <Text style={styles.qtyText}>{quantity}</Text>
                <TouchableOpacity onPress={increase}>
                  <Feather name="plus" size={16} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={[styles.footer, { paddingBottom: insets.bottom || 16 }]}>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payText}>Pagar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF',paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
    // marginTop:20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
    paddingBottom: 120,
  },
  card: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 16,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 12,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  productSubtitle: {
    color: '#6B7280',
    fontSize: 14,
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  oldPrice: {
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
  },
  discountBadge: {
    backgroundColor: '#D1FAE5',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  discountText: {
    fontSize: 12,
    color: '#10B981',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  qtyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  qtyText: {
    minWidth: 20,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    right: 16,
  },
  payButton: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  payText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
