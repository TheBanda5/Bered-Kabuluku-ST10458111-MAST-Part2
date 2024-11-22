import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

const courses = ['Starters', 'Mains', 'Desserts'];

type AddMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'AddMenu'>;

export default function AddMenuScreen({ navigation }: AddMenuScreenProps) {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState(courses[0]);
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    if (!dishName || !description || !price || isNaN(parseFloat(price))) {
      Alert.alert('Error', 'Please fill out all fields with valid data.');
      return;
    }

    const newItem = { dishName, description, course, price: parseFloat(price) };
    navigation.navigate('Home', { newItem });
    setDishName('');
    setDescription('');
    setCourse(courses[0]);
    setPrice('');
    Alert.alert('Success', 'Dish added successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dish Name:</Text>
      <TextInput style={styles.input} onChangeText={setDishName} value={dishName} />
      <Text style={styles.label}>Description:</Text>
      <TextInput style={styles.input} onChangeText={setDescription} value={description} />
      <Text style={styles.label}>Course:</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={course} onValueChange={setCourse}>
          {courses.map((course) => (
            <Picker.Item key={course} label={course} value={course} />
          ))}
        </Picker>
      </View>
      <Text style={styles.label}>Price:</Text>
      <TextInput style={styles.input} onChangeText={setPrice} value={price} keyboardType="numeric" />
      <Button title="Add Dish" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F5F5', justifyContent: 'center' },
  label: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 5,
    marginBottom: 20,
  },
});
