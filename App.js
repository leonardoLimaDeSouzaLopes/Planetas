import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Image, Text, View, ScrollView} from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function App() {

  const [visivel, setVisivel] = useState(false);

  const image = "./assets/background.png";

  const [planetaClicado, setPlanetaClicado] = useState(0);

  const [planeta, setPlaneta] = useState([
    {
      nome: "Terra",
      especies: ["Humanos"],
      composicao: ["Terra", "Água", "Rocha"],
      sistemaEstelar: "Sistema Solar",
      imagem: require('./assets/Terra.png'),
    },
    {
      nome: "Piscciss",
      especies: ["Piscciss Volanns", "Piscciss Premanns"],
      composicao: ["Água", "Rocha"],
      sistemaEstelar: "Desconhecido",
      imagem: require('./assets/Piscciss.png'),
    },
    {
      nome: "Aranhascimmia",
      especies: ["Arachnichimps"],
      composicao: ["Árvores", "Terra", "Rocha", "Água Verde"],
      sistemaEstelar: "Desconhecido",
      imagem: require('./assets/Aranhascimmia.png'),
    },
    {
      nome: "Peptos XII",
      especies: ["Gourmandos"],
      composicao: ["Rocha Rosa"],
      sistemaEstelar: "Sistema Peptos",
      imagem: require('./assets/PeptosXII.png'),
    },
    {
      nome: "Mikd'lty",
      especies: ["Necrofriggianos"],
      composicao: ["Gelo", "Fogo", "Rocha"],
      sistemaEstelar: "Sistema Monceros",
      imagem: require('./assets/Mikdlty.png'),
    },
    {
      nome: "Petropia",
      especies: ["Petrosapiens", "Crystalsapiens"],
      composicao: ["Cristal"],
      sistemaEstelar: "Desconhecido",
      imagem: require ('./assets/Petropia.png'),
    },
    {
      nome: "Galvan Prime",
      especies: ["Galvanianos", "Mecamorfos Galvânicos"],
      composicao: ["Terra, Rocha"],
      sistemaEstelar: "Sistema Galvan",
      imagem: require('./assets/GalvanPrime.png'),
    },
    {
      nome: "Anur Transyl",
      especies: ["Transylianos", "Ectonuritas", "Anur Khufos", "Loboans"],
      composicao: ["Terra, Rocha, Teias Roxas"],
      sistemaEstelar: "Sistema Anur",
      imagem: require('./assets/AnurTransyl.png'),
    },
    {
      nome: "Perplexaedro",
      especies: ["Nenhuma"],
      composicao: ["Matérial Branco Desconhecido"],
      sistemaEstelar: "Desconhecido",
      imagem: require('./assets/perplexaedro.png'),
    },
  ]);

  const irTelaPlaneta = (numeroPlaneta) => {

      setVisivel(true);

      setPlanetaClicado(numeroPlaneta);

  };

  return (
    <ScrollView>
      <StatusBar style="auto" />
      <ImageBackground style={styles.fundo} source={require("./assets/Background.png")}>
        <Pressable onPress={() => irTelaPlaneta(0)}>
          <Image style={styles.imagemPequena} source={planeta[0].imagem}/>
        </Pressable>
        <Pressable onPress={() => irTelaPlaneta(1)}>
          <Image style={styles.imagemPequena} source={planeta[1].imagem}/>
          </Pressable>
        <Pressable onPress={() => irTelaPlaneta(2)}>
          <Image style={styles.imagemPequena} source={planeta[2].imagem}/>
          </Pressable>
        <Pressable onPress={() => irTelaPlaneta(3)}>
          <Image style={styles.imagemPequena} source={planeta[3].imagem}/>
          </Pressable>
        <Pressable onPress={() => irTelaPlaneta(4)}>
          <Image style={styles.imagemPequena} source={planeta[4].imagem}/>
          </Pressable>
        <Pressable onPress={() => irTelaPlaneta(5)}>
          <Image style={styles.imagemPequena} source={planeta[5].imagem}/>
          </Pressable>
        <Pressable onPress={() => irTelaPlaneta(6)}>
          <Image style={styles.imagemPequena} source={planeta[6].imagem}/>
          </Pressable>
        <Pressable onPress={() => irTelaPlaneta(7)}>
          <Image style={styles.imagemPequena} source={planeta[7].imagem}/>
          </Pressable>
        <Pressable onPress={() => irTelaPlaneta(8)}>
          <Image style={styles.imagemPequena} source={planeta[8].imagem}/>
        </Pressable>
      </ImageBackground>




      <Modal visible={visivel} >
        <ImageBackground style={styles.fundo} source={require("./assets/Background.png")}>
          <Image style={styles.imagemGrande} source={planeta[planetaClicado].imagem}/>
          <Pressable onPress={() => {setVisivel(false)}}><Text style={styles.voltar}>Voltar</Text></Pressable>
        </ImageBackground>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: "#000000",
    flex:1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  texto: {
    color: "#ffffff",
    fontFamily: "Arial",
  },
  imagemPequena: {
    width: 100,
    height: 100,
    marginVertical: 100,
  },
  imagemGrande: {
    width: "62.5%",
    resizeMode: "contain",
    marginVertical: 100,
  },
  voltar: {
    color: "#ffffff",
    fontFamily: "Arial",
    fontSize: 30,
  },
});
