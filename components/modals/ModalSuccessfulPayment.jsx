import IconSuccessfulPayment from '@/assets/icons/shop/IconSuccessfulPayment';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function ModalSuccessfulPayment({ visible, onClose, onContinue }) {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <KeyboardAvoidingView
              style={styles.container}
              behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
              <View style={styles.handle} />
              <Text style={styles.title}>¡Pago Exitoso!</Text>
              <IconSuccessfulPayment style={styles.icon} />
              <Text style={styles.message}>
                Su compra fue procesada con éxito. ¡Disfruta del servicio!
              </Text>

              <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
                <Text style={styles.continueText}>Continuar</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}


// const [showSuccessModal, setShowSuccessModal] = useState(false);

// <ModalSuccessfulPayment
//   visible={showSuccessModal}
//   onClose={() => setShowSuccessModal(false)}
//   onContinue={() => {
//     setShowSuccessModal(false);
//     // Ir a otra pantalla o acción
//   }}
// />

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    alignItems: 'center',
  },
  handle: {
    width: 50,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444',
    marginVertical: 16,
  },
  icon: {
    marginBottom: 16,
  },
  continueButton: {
    backgroundColor: '#3669E8',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
