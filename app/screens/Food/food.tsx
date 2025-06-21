import IconCart from "@/assets/icons/IconCart";
import { Link } from 'expo-router';
import { ArrowLeft, Search } from 'lucide-react-native';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Product {
  id: number;
  name: string;
  description: string;
  weight: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: ImageSourcePropType;
}


export default function StoreProductList() {
    
  const products: Product[] = [
    {
      id: 1,
      name: 'Dogourtmet adulto',
      description: 'Carne a la parrilla',
      weight: '8 kg',
      price: 17950,
      originalPrice: 21500,
      discount: 15,
      image: require('@/assets/images/Shop/Product.jpg'),
    },
    {
      id: 2,
      name: 'Pedigree adulto',
      description: 'Pollo adultos',
      weight: '4kg',
      price: 31705,
      originalPrice: 35500,
      discount: 10,
      image: require('@/assets/images/Shop/Product.jpg'),
    },
    {
      id: 3,
      name: 'Chunky adulto',
      description: 'Pollo adultos',
      weight: '25kg',
      price: 17100,
      originalPrice: 19000,
      discount: 10,
      image: require('@/assets/images/Shop/Product.jpg'),
    },
    {
      id: 4,
      name: 'Dogourtmet',
      description: 'Carne a la parrilla',
      weight: '',
      price: 67950,
      originalPrice: 76000,
      discount: 10,
      image: require('@/assets/images/Shop/Product.jpg'),
    },
  ];

  const formatPrice = (price: number) => `$${price.toLocaleString('es-CO')}`;
    const insets = useSafeAreaInsets(); //


  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={[styles.header, {paddingTop: insets.top, }]}>
        <TouchableOpacity style={styles.iconButton}>
        <Link href="/tienda">
          <ArrowLeft size={20} />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
        <Link href="/screens/Food/cartScreen">
          <IconCart size={20} />
          </Link>
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar comida, accesorios, etc..."
          style={styles.searchInput}
        />
        <Search size={20} color="#9CA3AF" style={styles.searchIcon} />
      </View>

      {/* Title */}
      <Text style={styles.title}>Tienda</Text>

      {/* Categories */}
      <View style={styles.categories}>
        <TouchableOpacity style={[styles.categoryButton, styles.activeCategory]}>
          <Text style={styles.activeCategoryText}>Alimento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Juguetes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Farmacia</Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
        renderItem={({ item }) => (
            <Link href="/screens/Food/detailsProducts" style={styles.productCard} >
          <View style={styles.productCaard}>
            <View style={styles.productImageWrapper}>
              <Image source={item.image} style={styles.productImage} resizeMode="contain" />
            </View>

            <View style={styles.productInfo}>
              <View style={styles.productHeader}>
                <View>
                  <Text style={styles.productName}>
                    {item.name} {item.weight ? <Text>{item.weight}</Text> : null}
                  </Text>
                  <Text style={styles.productDescription}>{item.description}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={styles.productPrice}>{formatPrice(item.price)}</Text>
                  <Text style={styles.productOriginalPrice}>{formatPrice(item.originalPrice)}</Text>
                </View>
              </View>

              <View style={styles.productFooter}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.discount}%</Text>
                </View>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>Agregar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
            </Link>
        )}
      />
      
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },
  iconButton: {
    padding: 8,
    borderRadius: 999,
    backgroundColor: '#F3F4F6',
  },
  searchContainer: { padding: 16, position: 'relative' },
  searchInput: {
    backgroundColor: '#F3F4F6',
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 16,
    paddingRight: 40,
    fontSize: 14,
  },
  searchIcon: {
    position: 'absolute',
    right: 24,
    top: 22,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  categories: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
    gap: 8,
  },
  categoryButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
  },
  activeCategory: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  categoryText: {
    color: '#111827',
    fontSize: 14,
  },
  activeCategoryText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
productList: {
  paddingHorizontal: 16,
  paddingBottom: 32,
  paddingTop: 16,
},
productCaard:{
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: 0,
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
    width: 64,
    height: 64,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: 48,
    height: 48,
  },
  productInfo: { flex: 1 },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  productDescription: {
    fontSize: 12,
    color: '#6B7280',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
  },
  productOriginalPrice: {
    fontSize: 10,
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  badge: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: 10,
    color: '#2563EB',
  },
  addButton: {
    backgroundColor: '#22C55E',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 6,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});
