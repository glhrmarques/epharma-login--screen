import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, Image } from 'react-native';
import { StrokeButton, StrokeButtonText, DefaultButton, DefaultButtonText } from './styles/styles.js';

export default function App() {
  
  return (
        <>
          <StatusBar barStyle='dark-content' />
          <ImageBackground source={require('./images/loginPage.png')} style={styles.imageBg}>
            
            <View style={styles.appView}>
              <Image
                style={styles.epLogo}
                source={require('./images/ep_logo.png')}
                resizeMode='cover'
              />
              <View style={styles.homeWrapper}>
                <Text style={styles.homeText}>
                  Somos um meio que conecta e nutre todo o
                  <Text style={{fontWeight: 'bold'}}> ecossistema de saúde</Text>.
                </Text>
              </View>
              
              <View style={styles.buttonWrapper}>
                <StrokeButton onPress={ () => alert()}>
                    <StrokeButtonText>Cadastre-se</StrokeButtonText>
                </StrokeButton>

                <DefaultButton onPress={ () => alert()}>
                  <DefaultButtonText>Entrar</DefaultButtonText>
                </DefaultButton>
              </View>
            </View>
          </ImageBackground>
        </>
  );
}

const styles = StyleSheet.create({

    imageBg: {
      resizeMode: 'cover',
      width: '100%',
      height: '100%',
    },

    appView: {
      flex: 1,
      top: 500,
      marginHorizontal: 16,
    },

    buttonWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    homeWrapper: {
      marginBottom: 40,
    },

    homeText: {
      fontSize: 30,
      color: '#fafafa',
      marginRight: 16,
      lineHeight: 40,
    },

    epLogo: {
      marginBottom: 32,
    }
});