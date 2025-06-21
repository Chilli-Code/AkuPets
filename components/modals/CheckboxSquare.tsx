import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

type Props = {
  checked: boolean;
};

const CheckboxSquare: React.FC<Props> = ({ checked }) => {
  return (
    <TouchableOpacity style={styles.checkbox}>
      {checked && <Text style={styles.checkmark}>✔</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1.5,
    borderColor: '#3669e8',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
    lineHeight: 22,
    backgroundColor: '#3669e8',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    borderRadius: 4,
  },
});

export default CheckboxSquare;
