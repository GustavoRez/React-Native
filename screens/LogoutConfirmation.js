// screens/LogoutConfirmation.js
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function LogoutConfirmation({ onConfirm, onCancel }) {
  return (
    <View style={styles.modalBackground}>
      <View style={styles.modalContainer}>
        <Text style={styles.message}>Tem certeza que deseja sair?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.confirmButton]}
            onPress={onConfirm}>
            <Text style={styles.buttonText}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={onCancel}>
            <Text style={styles.buttonText}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#d32f2f',
  },
  cancelButton: {
    backgroundColor: '#388e3c',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
