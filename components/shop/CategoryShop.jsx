import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import IconAccessories from '@/assets/icons/shop/IconAccessories';
import IconFood from '@/assets/icons/shop/IconFood';
import IconMedicine from '@/assets/icons/shop/IconMedicine';
import IconMore from '@/assets/icons/shop/IconMore';
import IconPlay from '@/assets/icons/shop/IconPlay';

export default function TiendaScreen() {
  const router = useRouter();

  const iconsByLabel = {
    Comida: IconFood,
    Juguetes: IconPlay,
    Accesorios: IconAccessories,
    Medicina: IconMedicine,
    Mas: IconMore,
  };

  const routesByLabel = {
    Comida: '/screens/Food/food',
    Juguetes: '/screens/juguetes',
    Accesorios: '/tienda/accesorios',
    Medicina: '/tienda/medicina',
    Mas: '/tienda/mas',
  };

  const categories = [
    { color: '#FB923C', bg: '#FFEDD5', label: 'Comida' },
    { color: '#EC4899', bg: '#FCE7F3', label: 'Juguetes' },
    { color: '#3B82F6', bg: '#DBEAFE', label: 'Accesorios' },
    { color: '#4B5563', bg: '#E5E7EB', label: 'Medicina' },
    { color: '#10B981', bg: '#D1FAE5', label: 'Mas' },
  ];

  return (
    <View style={{ paddingVertical: 16 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContainer}>
        {categories.map((item, index) => {
          const IconComponent = iconsByLabel[item.label];
          const route = routesByLabel[item.label];

          return (
            <Pressable key={index} style={styles.categoryItem} onPress={() => router.push(route)}>
              <View style={[styles.categoryIcon, { backgroundColor: item.bg }]}>
                <IconComponent width={24} height={24} color={item.color} />
              </View>
              <Text style={styles.categoryLabel}>{item.label}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryIcon: {
    width: 55,
    height: 55,
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.14,
    shadowRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    backgroundColor: '#fff',
  },
  categoryLabel: {
    fontSize: 12,
    color: '#4B5563',
  },
});
