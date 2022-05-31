import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.header}>
      <Text style={styles.headerTitle}>Netflix Finder</Text>
      <Text style={styles.title}>
        Appuyez sur le bouton ci-dessous pour obtenir une suggestion de film à regarder.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text>TROUVER UN FILM</Text>
      </TouchableOpacity>
    </ScrollView>

    <View style={styles.footer}>
    </View>
  </SafeAreaView>
);

/* TENTER DE FAIRE UN PROJET D'APPLICATION POUR MUSCULATION AVEC DEUX PROGRAMMES DIFFERENTS SELON PERTE DE POIDS OU PRISE DE MASSE */

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'rgb(50,50,50)',
  },
  header: {
    marginTop: '10%',
  },
  headerTitle:{
    fontSize: 50,
    textAlign: 'center',
    color: '#E50914',
  },
  button: {
    backgroundColor: "rgb(200,200,200)",
    alignItems: "center",
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 40,
    borderRadius: 5,
    width: '75%',
    padding: 10,
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    color: '#e5e5e5',
  },
});

export default App;