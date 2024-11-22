import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type FilterMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'FilterMenu'>;

export default function FilterMenuScreen({ route, navigation }: FilterMenuScreenProps) {
  // Extract menuItems from route.params with a default empty array
  const menuItems = route.params?.menuItems || [];
  const [filteredItems, setFilteredItems] = useState(menuItems);

  // Filter by course (e.g., 'Appetizer', 'Main', 'Dessert')
  const filterByCourse = (course: string) => {
    setFilteredItems(menuItems.filter((item) => item.course === course)); // Use 'course' as defined in 'types.ts'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu</Text>
      <Button title="Show Appetizers" onPress={() => filterByCourse('Appetizer')} />
      <Button title="Show Mains" onPress={() => filterByCourse('Main')} />
      <Button title="Show Desserts" onPress={() => filterByCourse('Dessert')} />
      <Button title="Clear Filter" onPress={() => setFilteredItems(menuItems)} />

      <FlatList
        data={filteredItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.dishName}>{item.dishName} - {item.course}</Text>
            <Text>{item.description}</Text>
            <Text>${item.price.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
