import MapProduct from '@/components/shop/food/MapProduct';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

const { width } = Dimensions.get('window');

type HelpCenterProps = {
  travelTime?: string;
};

const HelpCenter: React.FC<HelpCenterProps> = ({ travelTime }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenSupport, setIsModalOpenSupport] = useState(false);

  const toggleChat = () => setIsChatOpen(!isChatOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModalSupport = () => setIsModalOpenSupport(true);
  const closeModalSupport = () => setIsModalOpenSupport(false);

  const handleCancelService = () => {
    console.log("Servicio cancelado.");
    closeModal();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MapProduct />
      {/* Servicio */}
      <View style={styles.serviceCard}>
        <Text style={styles.serviceLabel}>Servicio: <Text style={styles.serviceTitle}>Paseo</Text></Text>
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Feather name="calendar" size={20} color="#3669E8" style={styles.iconBackground} />
            <Text style={styles.infoText}>Fecha: 28/02/20</Text>
          </View>
          <View style={styles.infoItem}>
            <Feather name="clock" size={20} color="#3669E8" style={styles.iconBackground} />
            <Text style={styles.infoText}>Hora: {travelTime ?? 'Calculando...'}</Text>
          </View>
        </View>
      </View>

      {/* Perfil */}
      <View style={styles.profileCard}>
        <View style={styles.profileInfo}>
          <Image source={require('@/assets/images/react-logo.png')} style={styles.profileImg} />
          <View>
            <Text style={styles.profileName}>Laura Barrios</Text>
            <Text style={styles.profileRating}>⭐ 5.0 +34 solicitudes</Text>
          </View>
          <TouchableOpacity style={styles.chatButton} onPress={toggleChat}>
            <Feather name="message-circle" size={20} color="#3669E8" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Ayuda */}
      <View style={styles.helpSection}>
        <Text style={styles.helpTitle}>Centro de ayuda</Text>
        <TouchableOpacity style={styles.helpItem}>
          <Feather name="help-circle" size={18} color="#282b2c" />
          <Text style={styles.helpText}>Ayuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpItem} onPress={openModalSupport}>
          <Feather name="settings" size={18} color="#282b2c" />
          <Text style={styles.helpText}>Soporte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpItem} onPress={openModal}>
          <Feather name="x-circle" size={18} color="#E53125" />
          <Text style={styles.cancelText}>Cancelar servicio</Text>
        </TouchableOpacity>
      </View>

      {/* Modal de Cancelar */}
      <Modal isVisible={isModalOpen} onBackdropPress={closeModal}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Cancelar servicio</Text>
          <Text>¿Estás seguro de que quieres cancelar el paseo?</Text>
          <View style={styles.modalActions}>
            <TouchableOpacity style={styles.modalButtonOutline} onPress={closeModal}>
              <Text style={styles.modalBtnText}>Atrás</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButtonDanger} onPress={handleCancelService}>
              <Text style={styles.modalBtnText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal de Soporte */}
      <Modal isVisible={isModalOpenSupport} onBackdropPress={closeModalSupport}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Soporte</Text>
          <Text style={styles.supportNumber}>123456789</Text>
          <View style={styles.modalActions}>
            <TouchableOpacity style={styles.modalButtonOutline} onPress={closeModalSupport}>
              <Text style={styles.modalBtnText}>Atrás</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButtonPrimary}>
              <Text style={styles.modalBtnText}>Llamar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    marginTop:20,
    elevation: 3,
  },
  serviceLabel: {
    fontSize: 14,
    fontWeight: '300',
    color: '#696b6b',
    marginBottom: 10,
  },
  serviceTitle: {
    fontWeight: '700',
    color: '#282b2c',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  infoText: {
    fontSize: 14,
    fontWeight: '600',
  },
  iconBackground: {
    backgroundColor: '#3669E833',
    padding: 4,
    borderRadius: 50,
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
    marginBottom: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontWeight: '700',
    fontSize: 16,
    color: '#282b2c',
  },
  profileRating: {
    color: '#696B6B',
    fontWeight: '700',
    fontSize: 14,
  },
  chatButton: {
    backgroundColor: '#4CA7A833',
    padding: 5,
    borderRadius: 15,
  },
  helpSection: {
    marginTop: 10,
  },
  helpTitle: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 10,
  },
  helpItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 10,
    borderBottomWidth: 1,
    borderColor: '#EAEAEA',
  },
  helpText: {
    fontSize: 16,
    color: '#282b2c',
  },
  cancelText: {
    fontSize: 16,
    color: '#E53125',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    gap: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  modalActions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  modalButtonOutline: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  modalButtonDanger: {
    backgroundColor: '#E53125',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  modalButtonPrimary: {
    backgroundColor: '#3669E8',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  modalBtnText: {
    color: 'white',
    fontWeight: '600',
  },
  supportNumber: {
    color: '#696B6B',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default HelpCenter;
