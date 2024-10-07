// screens/HomeScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation, route }: HomeScreenProps) {
  const [menuItems, setMenuItems] = useState<{ dishName: string, description: string, course: string, price: number }[]>([]);

  useEffect(() => {
    if (route.params?.newItem) {
      setMenuItems((prevItems) => [...prevItems, route.params.newItem as { dishName: string; description: string; course: string; price: number }]);
    }
  }, [route.params?.newItem]);

  return (
    <ImageBackground
      source={require('../assets/homepage.jpeg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Chef's Menu</Text>
        <Button color='black' title="Add Menu" onPress={() => navigation.navigate('AddMenu')} />
        <Button  color='black' title="Filter Menu" onPress={() => navigation.navigate('FilterMenu')} />

        <Text style={styles.total}>Total Items: {menuItems.length}</Text>

        <FlatList
      
          data={menuItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.menuItem}>
              <Text>{item.dishName} - {item.course}</Text>
              <Text>{item.description}</Text>
              <Text>${item.price.toFixed(2)}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: "monospace",
    color: 'blue',  
  },
  menuItem: {
    borderBottomWidth: 1,
    paddingVertical: 10,

    backgroundColor: '#fff',
  },
 
  
  total:{
    color:'blue'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
