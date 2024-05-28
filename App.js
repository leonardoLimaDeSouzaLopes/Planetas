import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [visivel, setVisivel] = useState(false);

  return (
    <View style={styles.container}>
      <Modal visible={visivel} >
        <View style={styles.modal}>
        <Pressable onPress={() => {setVisivel(false)}}><Text>lol</Text></Pressable>
        </View>
      </Modal>
      <Pressable onPress={() => {setVisivel(true)}}><Text>lol</Text></Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: "#0000ff",
  },
});
