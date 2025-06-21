import { Link } from "expo-router";
import { Star } from "lucide-react-native";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function RecentStores() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tiendas recientes</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Link style={styles.link} href="/screens/Food/ShopProfile">
          <View style={styles.storeCard}>
            <View style={styles.storeAvatar}>
              <Image
                source={require("@/assets/images/Shop/LogoShop.jpg")}
                style={styles.logoShop}
                resizeMode="cover"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.storeTitle}>Home pet</Text>
              <View style={styles.storeDetails}>
                <View style={styles.storeRating}>
                  <Star size={16} color="#FACC15" fill="#FACC15" />
                  <Text style={styles.storeRatingText}>5.0</Text>
                </View>
                <Text style={styles.storeDot}>•</Text>
                <Text style={styles.storeDistance}>450 m</Text>
              </View>
            </View>
          </View>
        </Link>
        <Link style={styles.link} href="/screens/Food/ShopProfile">
          <View style={styles.storeCard}>
            <View style={styles.storeAvatar}>
              <Image
                source={require("@/assets/images/Shop/LogoShop.jpg")}
                style={styles.logoShop}
                resizeMode="cover"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.storeTitle}>Home pet</Text>
              <View style={styles.storeDetails}>
                <View style={styles.storeRating}>
                  <Star size={16} color="#FACC15" fill="#FACC15" />
                  <Text style={styles.storeRatingText}>5.0</Text>
                </View>
                <Text style={styles.storeDot}>•</Text>
                <Text style={styles.storeDistance}>450 m</Text>
              </View>
            </View>
          </View>
        </Link>
        <Link style={styles.link} href="/screens/Food/ShopProfile">
          <View style={styles.storeCard}>
            <View style={styles.storeAvatar}>
              <Image
                source={require("@/assets/images/Shop/LogoShop.jpg")}
                style={styles.logoShop}
                resizeMode="cover"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.storeTitle}>Home pet</Text>
              <View style={styles.storeDetails}>
                <View style={styles.storeRating}>
                  <Star size={16} color="#FACC15" fill="#FACC15" />
                  <Text style={styles.storeRatingText}>5.0</Text>
                </View>
                <Text style={styles.storeDot}>•</Text>
                <Text style={styles.storeDistance}>450 m</Text>
              </View>
            </View>
          </View>
        </Link>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { paddingHorizontal: 16, paddingBottom: 22 },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 8,
    fontFamily: "Roboto_800Regular",
  },
  sectionSubtitle: { fontSize: 14, color: "#6B7280", marginBottom: 8 },
  mapCard: { borderRadius: 8, overflow: "hidden", backgroundColor: "#E5E7EB" },
  mapArea: { height: 128, backgroundColor: "#D1D5DB", position: "relative" },
  mapMarker: {
    position: "absolute",
    width: 24,
    height: 24,
    backgroundColor: "#3B82F6",
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
  },
  locationOverlay: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  link:{
     marginTop: 12,
    marginRight: 12,
    width: 250,
    marginTop:20,
    marginBottom:20,
  },
  logoShop: {
    width: 50,
    height: 50,
    borderRadius: 9999,
    objectFit: "cover",
  },
  locationTitle: { fontSize: 12, fontWeight: "500" },
  locationSubtitle: { fontSize: 12, color: "#2563EB" },
  viewListButton: {
    position: "absolute",
    bottom: 8,
    right: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 4,
  },
  viewListText: { fontSize: 12, color: "#111827" },
  storeCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.14,
    shadowRadius: 10,
    elevation: 4, // para Android, puedes ajustar este valor
    marginTop: 12,
    backgroundColor: "#fff",
  },
  storeAvatar: {
    width: 50,
    height: 50,
    borderRadius: 9999,
    // backgroundColor: '#1F2937',
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  storeAvatarText: { color: "#fff", fontSize: 12, fontWeight: "bold" },
  storeTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#282B2C",
    fontFamily: "Roboto_800Regular",
  },
  storeDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  storeRating: { flexDirection: "row", alignItems: "center", gap: 4 },
  storeRatingText: { fontSize: 14, color: "#4B5563" },
  storeDot: { color: "#9CA3AF" },
  storeDistance: { fontSize: 14, color: "#4B5563" },
  serviceCard: {
    flexDirection: "row",
    gap: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 1,
  },
  serviceImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#FECACA",
    justifyContent: "center",
    alignItems: "center",
  },
  serviceImageInner: {
    width: 32,
    height: 32,
    backgroundColor: "#DC2626",
    borderRadius: 4,
  },
  serviceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  serviceTitle: { fontSize: 16, fontWeight: "500", color: "#111827" },
  serviceDesc: { fontSize: 14, color: "#4B5563" },
  badges: { flexDirection: "row", gap: 4 },
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 12,
  },
  serviceFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  currentPrice: { fontSize: 18, fontWeight: "bold", color: "#111827" },
  oldPrice: {
    fontSize: 14,
    color: "#9CA3AF",
    textDecorationLine: "line-through",
  },
  addButton: {
    backgroundColor: "#10B981",
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  addButtonText: { color: "#fff", fontSize: 14 },
});
