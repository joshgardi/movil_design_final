import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const IMAGES_BASE_URL = 'https://picsum.photos/200/300?image=';

const ContadorApp: React.FC = () => {
  const [contador, setContador] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  const handleIncrement = () => {
    setContador(contador + 1);
  };

  const handleDecrement = () => {
    setContador(contador - 1);
  };

  useEffect(() => {
    const imageIndex = Math.floor(Math.random() * 1000);
    setBackgroundImage(`${IMAGES_BASE_URL}${imageIndex}`);
  }, [contador]);

  return (
    <View style={styles.container}>
      {backgroundImage && (
        <ImageBackground source={{ uri: backgroundImage }} style={styles.backgroundImage}>
          <View style={styles.content}>
            <Text style={styles.title}>Josue Garcia Diaz</Text>
            <Text style={styles.title}>2019-0040</Text>
            <Text style={styles.welcomeText}>
              ¡Bienvenido/a a Mi Contador! Presiona los botones para sumar o restar.
            </Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
              <Text style={styles.countText}>{contador}</Text>
              <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#FDD835',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ContadorApp;
