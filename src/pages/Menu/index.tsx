import React from 'react';
import Constants from 'expo-constants';
import { Feather as Icon } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export default function Menu() {
  const navigation = useNavigation();

  function handleNavigateDash() {
    navigation.navigate('Dashboard')
  }

  function handleNavigateBack() {
    navigation.goBack()
  }

  return (
    <>
      <LinearGradient colors={['#60AEB0', '#7509c1']} start={[0.0, 0.15]} end={[2.0, 1.0]} style={styles.container} >

        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={25} color='#FFF' />
        </TouchableOpacity>

        <Text style={styles.title}>
          Câmeras disponíveis
        </Text>
        <Text style={styles.description}>
          Selecione uma câmera.
        </Text>
        <View style={styles.mapContainer}>
          <TouchableOpacity onPress={() => { }}>
            <MaterialIcons name="refresh" size={25} color='#60AEB0' />
          </TouchableOpacity>

          <View style={styles.mapContainerInfo}>
            <Image style={{ maxWidth: 280, height: 210, marginTop: 20 }} source={require('../../assets/cam.png')} />
          </View>

          <RectButton style={styles.button} onPress={handleNavigateDash}>
            <Text style={styles.buttonText}>
              VER MAIS
              </Text>
          </RectButton>
        </View>
      </LinearGradient >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },

  containerInfo: {
    width: '65%',
    alignItems: 'center',
    flexDirection: 'row',
  },

  title: {
    fontSize: 20,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 24,
    color: '#f0f0f0',
  },

  titleInfo: {
    fontSize: 40,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 15,
    color: '#e9bf52',
  },

  description: {
    color: '#f0f0f0',
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'Roboto_400Regular',
  },

  infoDescription: {
    color: '#6C6C80',
    fontSize: 15,
    width: 150,
    marginTop: 15,
    marginLeft: 8,
    textAlign: 'center',
    fontFamily: 'Roboto_400Regular',
  },

  mapContainer: {
    height: 340,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
    backgroundColor: '#FFF',
    padding: 5,
  },

  mapContainerInfo: {
    flex: 1,
    alignItems: 'center',
  },


  button: {
    backgroundColor: '#60AEB0',
    height: 40,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },

  itemTitle: {
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
    fontSize: 13,
  },
});