import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
export default function RecentServices() {
  return (

<View style={styles.section}>
        <Text style={styles.sectionTitle}>Servicios recientes</Text>
        <Text style={styles.sectionSubtitle}>Vuelve a solicitar al instante</Text>
        <View style={styles.serviceCard}>
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
              <View>
                <Text style={styles.serviceTitle}>Dogourtmet</Text>
                <Text style={styles.serviceDesc}>Carne a la parrilla</Text>
              </View>
              <View style={styles.badges}>
                <Text style={[styles.badge, { backgroundColor: '#3669E8', color: '#FFFFFF' }]}>8KG</Text>
                <Text style={[styles.badge, { backgroundColor: '#FFFFFF', color: '#3669E8', borderColor: '#3669E8',  borderWidth: 1, }]}>25KG</Text>
              </View>
            </View>
            <View style={styles.serviceFooter}>
              <View style={styles.priceRow}>
                <Text style={styles.currentPrice}>$67.950</Text>
                <Text style={styles.oldPrice}>$75.000</Text>
              </View>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Agregar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
  );
};



const styles = StyleSheet.create({

 section: { paddingHorizontal: 16, paddingBottom: 22 },

sectionTitle: { fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
    fontFamily: 'Roboto_800Regular',
},
  sectionSubtitle: { fontSize: 16, color: '#696B6B', marginBottom: 8 },
  mapCard: { borderRadius: 8, overflow: 'hidden', backgroundColor: '#E5E7EB' },
  mapArea: { height: 128, backgroundColor: '#D1D5DB', position: 'relative' },
  mapMarker: {
    position: 'absolute',
    width: 24,
    height: 24,
    backgroundColor: '#3B82F6',
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationOverlay: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationTitle: { fontSize: 12, fontWeight: '500' },
  locationSubtitle: { fontSize: 12, color: '#2563EB' },
  viewListButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
  },
  viewListText: { fontSize: 12, color: '#111827' },
  storeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 1,
  },
  storeAvatar: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    backgroundColor: '#1F2937',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  storeAvatarText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  storeTitle: { fontSize: 16, fontWeight: '500', color: '#111827' },
  storeDetails: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 },
  storeRating: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  storeRatingText: { fontSize: 14, color: '#4B5563' },
  storeDot: { color: '#9CA3AF' },
  storeDistance: { fontSize: 14, color: '#4B5563' },
  serviceCard: {
    flexDirection: 'row',
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
  priceRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  currentPrice: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
  oldPrice: {
    fontSize: 14,
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
  },
  addButton: {
    backgroundColor: '#03C651',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  addButtonText: { color: '#fff', fontSize: 14 },
});
