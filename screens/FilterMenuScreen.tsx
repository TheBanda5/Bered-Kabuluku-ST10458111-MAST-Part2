import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type FilterMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'FilterMenu'>;

export default function FilterMenuScreen({ route }: FilterMenuScreenProps) {
  const menuItems = route.params?.menuItems || [];
  const [filteredItems, setFilteredItems] = useState(menuItems);

  const filterByCourse = (course: string) => {
    setFilteredItems(menuItems.filter((item) => item.course === course));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu</Text>
      <Button title="Show Starters" onPress={() => filterByCourse('Starters')} />
      <Button title="Show Mains" onPress={() => filterByCourse('Mains')} />
      <Button title="Show Desserts" onPress={() => filterByCourse('Desserts')} />
      <Button title="Clear Filter" onPress={() => setFilteredItems(menuItems)} />
      <FlatList
        data={filteredItems}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.dishName} - {item.course}</Text>
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
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderBottomColor: '#ccc',
  },
});
