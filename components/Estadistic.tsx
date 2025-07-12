
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// AquÃ­ asumo que estos son tus componentes de Ã­conos personalizados:
import CargaCero from '@/assets/icons/CargaCero';
import CargaSmall from '@/assets/icons/CargaSmall';
import IconCheck from '@/assets/icons/IconCheck';
import IconClose from '@/assets/icons/IconClose';
import IconProgress from '@/assets/icons/IconProgress';

const days = [
  { label: 'Lun', icon: <IconCheck /> },
  { label: 'Mar', icon: <IconClose /> },
  { label: 'Mie', icon: <IconCheck /> },
  { label: 'Jue', icon: <CargaSmall /> },
  { label: 'Hoy', icon: <IconProgress /> },
  { label: 'Sab', icon: <CargaCero /> },
  { label: 'Dom', icon: <CargaCero /> },
];

export default function Estadistic() {
  return (
    <View style={{marginBottom:20}}>
      <Text style={styles.titleP}>Estadisticas</Text>
      <View style={styles.serviceCard}>
      {/* Header */}
      <View style={styles.contInfo}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Image
            source={require("@/assets/images/Pets/Dog1.jpg")}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.titlecont}>Pasos realizados</Text>
            <Text style={styles.dateText}>Mascota - Logan</Text>
          </View>
        </View>
        <Feather name="chevron-right" size={20} color="#000" />
      </View>

      {/* Subtitle */}
      <Text style={[styles.dateText, 
      {fontWeight:"600", 
        fontSize:17}]}
        >
        Paseos diarios completados
        </Text>
      {/* Icon row */}
      <View style={styles.daysRow}>
        {days.map((item, index) => (
          <View key={index} style={styles.dayItem}>
            {item.icon}
            <View style={styles.daySeparator} />
            <Text style={styles.dayLabel}>{item.label}</Text>
          </View>
        ))}
      </View>


      {/* Button */}
      <View style={{display:"flex", justifyContent:"center", width:"100%",alignItems:"flex-end"}}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Solicitar paseo</Text>
      </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    elevation: 2,
  },
  contInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    alignItems: 'center',
    borderColor: '#EAEAEA',
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  contImage: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  titlecont: {
    fontSize: 19,
    fontWeight: '700',
  },
  dateText: {
    fontSize: 15,
    color: '#333',
    fontWeight: '400',
  },
  titleP: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 12,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dayItem: {
    alignItems: 'center',
    width: 35,
  },
  dayLabel: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
  },
  button: {
    width:200,
    backgroundColor: '#3669E8',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },

    daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
    daySeparator: {
    width: 1,
    height: 12,
    backgroundColor: '#CCC',
    marginVertical: 4,
  },
});
