// App.js
import React, { useState } from 'react';
import { View, Modal, StyleSheet } from 'react-native';

import Login from './screens/Login';
import ChamadaAdm from './screens/ChamadaAdm';
import ChamadaProf from './screens/ChamadaProf';
import ChamadaAluno from './screens/ChamadaAluno';
import Configuracoes from './screens/Configuracoes';
import Perfil from './screens/Perfil';
import LogoutConfirmation from './screens/LogoutConfirmation';

export default function App() {
  const [navigationStack, setNavigationStack] = useState(['Login']);
  const [userType, setUserType] = useState(null);
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);

  const currentScreen = navigationStack[navigationStack.length - 1];

  const navigate = (screen, params = {}) => {
    if (params.userType) {
      setUserType(params.userType);
    }
    setNavigationStack([...navigationStack, screen]);
  };

  const goBack = () => {
    if (navigationStack.length > 1) {
      setNavigationStack(navigationStack.slice(0, -1));
    }
  };

  const handleLogout = () => {
    setIsLogoutVisible(true);
  };

  const confirmLogout = () => {
    setIsLogoutVisible(false);
    setNavigationStack(['Login']);
    setUserType(null);
  };
  const cancelLogout = () => {
    setIsLogoutVisible(false);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <Login navigate={navigate} />;
      case 'ChamadaAdm':
        return <ChamadaAdm navigate={navigate} onLogout={handleLogout} />;
      case 'ChamadaProf':
        return <ChamadaProf navigate={navigate} onLogout={handleLogout} />;
      case 'ChamadaAluno':
        return <ChamadaAluno navigate={navigate} onLogout={handleLogout} />;
      case 'Configuracoes':
        return <Configuracoes navigate={navigate} goBack={goBack} />;
      case 'Perfil':
        return <Perfil navigate={navigate} goBack={goBack} />;
      default:
        return <Login navigate={navigate} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      <Modal
        visible={isLogoutVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={cancelLogout}>
        <LogoutConfirmation onConfirm={confirmLogout} onCancel={cancelLogout} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
