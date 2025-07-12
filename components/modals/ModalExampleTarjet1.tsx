

import IconTarjetExample from "@/assets/icons/IconTarjetExample";
import React from 'react';
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

interface ModalExampleTarjet1Props {
  visible: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export default function ModalExampleTarjet1({
  visible,
  onClose,
  onContinue,
}: ModalExampleTarjet1Props) {
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
              <View style={{width:'100%',}}>
              <Text style={styles.title}>Fecha de Vencimiento</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.message}>
                  La fecha de vencimiento se ubica en la parte frontal de la tarjeta,
                  debajo del numero de tarjeta.
                </Text>
                <IconTarjetExample />
              </View>

              <View style={styles.separator} />

             
              <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
                <Text style={styles.continueText}>Entiendo</Text>
              </TouchableOpacity>

            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

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
    textAlign:"left",
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    marginBottom:10
  },
  message: {
    fontSize: 16,
    textAlign: 'left',
    color: '#444',
    flex: 1,
    fontWeight:"300",
  },
  continueButton: {
    backgroundColor: '#3669E8',
    paddingVertical: 12,
    paddingHorizontal: 32,
    width:"90%",
    textAlign:"center",
    borderRadius: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
    width: '100%',
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:"center",
  },
});