// screens/ChamadaAdm.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ChamadaAdm({ navigate, onLogout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, Administrador</Text>
      {/* Adicione funcionalidades específicas para o administrador aqui */}
      <Button title="Perfil" onPress={() => navigate('Perfil')} />
      <Button title="Configurações" onPress={() => navigate('Configuracoes')} />
      <Button title="Logout" onPress={onLogout} color="#d32f2f" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});
