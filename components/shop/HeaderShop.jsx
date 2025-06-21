
import { Search } from 'lucide-react-native';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';
 
 export default function HeaderShop() {
 return(
 <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
          <Search size={20} color="#9CA3AF" style={styles.searchIcon} />
          <TextInput
            placeholder="Buscar tienda"
            style={styles.searchInput}
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>
 );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
  searchContainer: { padding: 16, borderBottomWidth: 1, borderColor: '#E5E7EB' },
  searchInputWrapper: {
  position: 'relative',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.14,
  shadowRadius: 10,
  elevation: 4, // para Android, puedes ajustar este valor
  backgroundColor: '#fff', // necesario para que se vea la sombra
  borderRadius: 8,
},

  searchIcon: { position: 'absolute', top: 14, left: 12, zIndex: 1 },
  searchInput: {
    height: 48,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingLeft: 40,
    paddingRight: 16,
    fontSize: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
});