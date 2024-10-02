// screens/Perfil.js
import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function Perfil({ navigate, goBack }) {
  const handleEditProfile = () => {
    Alert.alert('Editar Perfil');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      {/* Exiba informações do perfil aqui */}
      <Button title="Editar Perfil" onPress={handleEditProfile} />
      <Button title="Voltar" onPress={goBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fffde7',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});
