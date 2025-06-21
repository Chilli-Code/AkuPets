import React, { useState } from 'react';

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
import { Calendar } from 'react-native-calendars';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSave: (data: { date: string }) => void;
}

const ModalCalendar: React.FC<Props> = ({ visible, onClose, onSave }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;


  const currentMonth = today.getMonth() + 1; // 1-12
  const currentYear = today.getFullYear();

  const [displayedMonth, setDisplayedMonth] = useState({
    month: currentMonth,
    year: currentYear,
  });

  const handleDateSelect = (day: { dateString: string }) => {
    setSelectedDate(day.dateString); // ✅ guardamos el string directamente
  };

  const handleClear = () => {
    setSelectedDate(null);
  };

  const handleContinue = () => {
    if (selectedDate) {
      onSave({ date: selectedDate }); // ✅ enviamos string sin convertir
    }
  };

  const isAtMinMonth =
    displayedMonth.year === currentYear && displayedMonth.month === currentMonth;

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

              <Text style={styles.title}>Fecha y hora</Text>
              <Text style={styles.subtitle}>
                Selecciona la fecha que desea que llegue su producto
              </Text>


              <Calendar
                current={selectedDate ?? todayStr}
                minDate={todayStr}
                onDayPress={handleDateSelect}
                onMonthChange={(month) =>
                  setDisplayedMonth({ month: month.month, year: month.year })
                }
                disableArrowLeft={isAtMinMonth} // ✅ solo desactiva si está en el mes actual
                markedDates={
                  selectedDate
                    ? {
                      [selectedDate]: {
                        selected: true,
                        selectedColor: '#3669E8',
                      },
                    }
                    : {}
                }
                theme={{
                  selectedDayBackgroundColor: '#3669E8',
                  textMonthFontWeight: 'bold',
                  monthTextColor: '#3669E8',
                  selectedDayTextColor: '#fff',
                  todayTextColor: '#3669E8',
                  arrowColor: '#3669E8',
                  textSectionTitleColor: '#333',
                  dayTextColor: '#222',
                  textMonthFontSize: 16,
                }}
              />

              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={[styles.button, styles.clearButton]}
                  onPress={handleClear}
                >
                  <Text style={styles.clearText}>Limpiar filtros</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.button,
                    styles.continueButton,
                    !selectedDate && { opacity: 0.5 },
                  ]}
                  onPress={handleContinue}
                  disabled={!selectedDate}
                >
                  <Text style={styles.continueText}>Continuar</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalCalendar;



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
    padding: 20,
    maxHeight: '90%',
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: '600',
    fontFamily: 'Roboto_700Bold',

    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 17,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: '#f0f0f0',
  },
  continueButton: {
    backgroundColor: '#3669E8',
  },
  clearText: {
    color: '#333',
    fontSize: 15,
    fontWeight: '500',
  },
  continueText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});


