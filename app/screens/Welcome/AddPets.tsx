
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

import {
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function AddPets() {
    
    const router = useRouter();
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [gender, setGender] = useState('');
    const [description, setDescription] = useState('');
    
    const isFormComplete = 
    name.trim() &&
    type.trim() &&
    gender.trim() &&
    age > 0 &&
    weight > 0;

    const handleIncrement = (field: 'age' | 'weight') => {
        field === 'age' ? setAge(age + 1) : setWeight(weight + 1);
    };

    const handleDecrement = (field: 'age' | 'weight') => {
        field === 'age'
            ? setAge(Math.max(0, age - 1))
            : setWeight(Math.max(0, weight - 1));
    };

    function handleComplete(){
        if(!isFormComplete) return;
        router.push('/screens/Welcome/AddPetsSucces');
    }

    return (

        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Feather name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.title}>Datos de tu mascota</Text>
                <Text style={styles.subtitle}>
                    Ingresa los datos para registrar tu cuenta.
                </Text>
            </View>

            <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 120 }}>
                <View style={styles.avatarRow}>
                    <View style={styles.avatarContainer}>
                        <Feather name="image" size={40} color="#6b7280" />
                        <TouchableOpacity style={styles.editIcon}>
                            <Feather name="edit-2" size={16} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.rowRight}>
                        <TouchableOpacity>
                            <Text style={styles.uploadText}>Subir foto</Text>
                        </TouchableOpacity>
                        <Feather name="chevron-right" size={20} color="#3b82f6" />
                    </View>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre de la mascota"
                    value={name}
                    onChangeText={setName}
                />

                <View style={styles.inputWithButtons}>
                    <Text style={styles.flexInput}>Edad: <Text style={{color:"#000", fontWeight:"400"}}>{age} Años</Text></Text>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={() => handleDecrement('age')} style={{borderWidth:1, borderColor:"#000", borderRadius:8}}>
                            <Feather name="minus" size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleIncrement('age')} style={{borderWidth:1, borderColor:"#000", borderRadius:8}}>
                            <Feather name="plus" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.inputWithButtons}>
                    <Text style={styles.flexInput}>Peso: <Text style={{color:"#000", fontWeight:"400"}}>{weight} kg</Text></Text>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={() => handleDecrement('weight')} style={{borderWidth:1, borderColor:"#000", borderRadius:8}}>
                            <Feather name="minus" size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleIncrement('weight')} style={{borderWidth:1, borderColor:"#000", borderRadius:8}}>
                            <Feather name="plus" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Tipo de mascota"
                    value={type}
                    onChangeText={setType}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Sexo"
                    value={gender}
                    onChangeText={setGender}
                />

                <TextInput
                    style={[styles.input, { height: 130 }]}
                    placeholder="Descripcion"
                    value={description}
                    onChangeText={setDescription}
                    multiline
                />
            </ScrollView>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.buttonBase,
                isFormComplete ? styles.buttonEnabled : styles.buttonDisabled]} disabled ={!isFormComplete} onPress={handleComplete}>
                    <Text style={styles.buttonText}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
},
header: {
    paddingHorizontal: 20,
    paddingBottom: 5,
    backgroundColor: '#fff',
},
container: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
},
title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
},
subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 30,
},
avatarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
},
avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#d1d5db',
},
editIcon: {
    position: 'absolute',
    right: 0,
    top: 4,
    backgroundColor: '#6b7280',
    borderRadius: 20,
    padding: 4,
},
rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
},
uploadText: {
    color: '#3b82f6',
    fontWeight: '500',
},
input: {
    backgroundColor: '#e5e7eb',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
},
inputWithButtons: {
    backgroundColor: '#e5e7eb',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 15,
    justifyContent: 'space-between',
},
flexInput: {
    fontSize: 16,
    flex: 1,
    fontWeight: "300",
    color: "#6e7179",
    backgroundColor: "#e5e7eb",
    paddingVertical: 12,
},
buttons: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
},
buttonContainer: {
    position: 'absolute',
    bottom: 5,
    left: 20,
    right: 20,
},
buttonBase:{
    paddingVertical:16,
    borderRadius:10,
    alignItems:"center",
},
buttonEnabled:{
    backgroundColor:"#2563eb"
},
buttonDisabled: {
    backgroundColor: '#c7d2fe'
},
buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
},

});
