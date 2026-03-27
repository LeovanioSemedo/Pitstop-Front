import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, Text, ScrollView, SafeAreaView } from 'react-native';
import { styles } from './menuStyles';
import { Ionicons } from '@expo/vector-icons';


interface MenuItem {
  id: string;
  nome: string;
  onPress: () => void;
}

interface MenuProps {
  visible: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

export const Menu: React.FC<MenuProps> = ({ visible, onClose, menuItems }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >

      {/* Fundo escuro (overlay) */}
      <TouchableOpacity 
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
     

        {/* Conteúdo do menu */}
        <TouchableOpacity 
          style={styles.menuContainer}
          activeOpacity={1}
        >

            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Ionicons name="close" size={38} color="#022B30" />
            </TouchableOpacity>
            
          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
              {menuItems.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.menuItem}
                  onPress={() => {
                    item.onPress();
                    onClose();
                  }}
                >
                  <Text style={styles.menuLabel}>{item.nome}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </SafeAreaView>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};
