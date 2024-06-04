import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View, ScrollView} from 'react-native';

export default function App() {

  const [visivel, setVisivel] = useState(false);

  return (
    <ScrollView>
      <StatusBar style="auto" />
      <Modal visible={visivel} >
        <View style={styles.modal}>
        <Pressable onPress={() => {setVisivel(false)}}><Text>lol</Text></Pressable>
        </View>
      </Modal>
      <Pressable onPress={() => {setVisivel(true)}}><Text>lol</Text></Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  modal: {
    backgroundColor: "#0000ff",
  },
});