import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type FilterMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'FilterMenu'>;

export default function FilterMenuScreen({ navigation }: FilterMenuScreenProps) {
  return (
   
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu</Text>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',  // Light background for a clean look
    padding: 20,
  },
  title: {
    fontSize: 28,                // Larger font size for a bold effect
    fontWeight: '700',           // Bold font weight
    color: '#2E86C1',            // A cool blue for the text
    marginBottom: 30,            // Larger bottom margin
    textShadowColor: '#ABB2B9',  // Adds a light shadow for depth
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

});
