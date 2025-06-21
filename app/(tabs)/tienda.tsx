
import CategoryShop from "@/components/shop/CategoryShop";
import HeaderShop from "@/components/shop/HeaderShop";
import NearbyStores from "@/components/shop/NearbyStores";
import RecentServices from "@/components/shop/RecentServices";
import RecentStores from "@/components/shop/RecentStores";
import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet
} from 'react-native';
export default function TiendaScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
      {/* Search Header */}
      <HeaderShop />

      {/* Category Icons */}
      <CategoryShop />

      {/* Sección de tiendas cercanas */}
      <NearbyStores />

      {/* Recent Stores Section */}
      <RecentStores />
      {/* Recent Services Section */}
      <RecentServices />
      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#FFFFFF', flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, },
  scroll: {
  flex: 1,
  paddingHorizontal: 10,
},
});
