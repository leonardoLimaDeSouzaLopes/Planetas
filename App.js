import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Image, Text, View, ScrollView} from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function App() {

  const [visivel, setVisivel] = useState(false);

  return (
    <ScrollView>
      <StatusBar style="auto" />
      <ImageBackground style={styles.fundo} source={require("./assets/background.png")}>
        <Pressable onPress={() => {setVisivel(true)}}><Text style={styles.texto}>Algo</Text></Pressable>
      </ImageBackground>
      <Modal visible={visivel} >
        <ImageBackground style={styles.fundo} source={require("./assets/background.png")}>
          <Pressable onPress={() => {setVisivel(false)}}><Text style={styles.texto}>Algo</Text></Pressable>
        </ImageBackground>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: "#000000",
    flex:1,
  },
  texto: {
    color: "#0000ff",
  },
});