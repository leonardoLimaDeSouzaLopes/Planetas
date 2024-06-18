import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Image, Text, View, ScrollView} from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function App() {

  const [visivel, setVisivel] = useState(false);

  const image = "./assets/background.png";

  const [planeta, setPlaneta] = useState([
    {
      nome: "Terra",
      especies: ["Humanos"],
      composicao: ["Terra", "Água", "Rocha"],
      sistemaEstelar: "Sistema Solar",
    },
    {
      nome: "Piscciss",
      especies: ["Piscciss Volanns", "Piscciss Premanns"],
      composicao: ["Água", "Rocha"],
      sistemaEstelar: "Desconhecido",
    },
    {
      nome: "Aranhascimmia",
      especies: ["Arachnichimps"],
      composicao: ["Árvores", "Terra", "Rocha", "Água Verde"],
      sistemaEstelar: "Desconhecido",
    },
    {
      nome: "Peptos XII",
      especies: ["Gourmandos"],
      composicao: ["Rocha Rosa"],
      sistemaEstelar: "Sistema Peptos",
    },
    {
      nome: "Mikd'lty",
      especies: ["Necrofriggianos"],
      composicao: ["Gelo", "Fogo", "Rocha"],
      sistemaEstelar: "Sistema Monceros",
    },
    {
      nome: "Petropia",
      especies: ["Petrosapiens", "Crystalsapiens"],
      composicao: ["Cristal"],
      sistemaEstelar: "Desconhecido",
    },
    {
      nome: "Galvan Prime",
      especies: ["Galvanianos", "Mecamorfos Galvânicos"],
      composicao: ["Terra, Rocha"],
      sistemaEstelar: "Sistema Galvan",
    },
    {
      nome: "Anur Transyl",
      especies: ["Transylianos", "Ectonuritas", "Anur Khufos", "Loboans"],
      composicao: ["Terra, Rocha, Teias Roxas"],
      sistemaEstelar: "Sistema Anur",
    },
    {
      nome: "Perplexaedro",
      especies: ["Nenhuma"],
      composicao: ["Matérial Branco Desconhecido"],
      sistemaEstelar: "Desconhecido",
    },
  ]);

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