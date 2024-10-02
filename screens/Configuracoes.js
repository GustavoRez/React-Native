// screens/Configuracoes.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Configuracoes({ navigate, goBack }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      {/* Adicione opções de configurações aqui */}
      <Button title="Voltar" onPress={goBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#e8f5e9',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});
