import IconMap from "@/assets/icons/shop/IconMap";
import { MapPin } from 'lucide-react-native';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
export default function NearbyStores() {

    return(
<View style={styles.section}>
        <Text style={styles.sectionTitle}>Tiendas cerca (+12)</Text>
        <View style={styles.mapCard}>
          <ImageBackground 
          source={require('@/assets/images/MapaPrueba.jpg')}
          resizeMode="cover"
          style={styles.mapArea}
          >
            <View style={[styles.mapMarker, { top: 16, left: 24 }]}>
              <MapPin size={16} color="#fff" />
            </View>
            <View style={[styles.mapMarker, { bottom: 16, right: 32 }]}>
              <MapPin size={16} color="#fff" />
            </View>
            <View style={styles.locationOverlay}>
              <IconMap size={24} color="#fff" fill="none"  />
              <View>
                <Text style={styles.locationTitle}>Tiendas cerca de ti</Text>
                <Text style={styles.locationSubtitle}>+12 veterinarias</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.viewListButton}>
              <Text style={styles.viewListText}>📋 Ver lista</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>

    );

};

const styles = StyleSheet.create({

  section: { paddingHorizontal: 16, paddingBottom: 16 },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    fontFamily: 'Roboto_800Regular',
    marginBottom: 8
  },
  sectionSubtitle: {
    fontSize: 24,
    color: '#6B7280',
    fontWeight:100,
    marginBottom: 8,
    fontFamily: 'Roboto_400Regular',
  },
  mapCard: { borderRadius: 8, overflow: 'hidden', backgroundColor: '#E5E7EB' },
  mapArea: { 
    height: 128,
    //backgroundColor:'#D1D5DB',
    position:'relative'
  },
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
    width:300,
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
});