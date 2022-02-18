import { Text, View, Image, StyleSheet, SafeAreaView, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import {Rock, Paper, Scissor, bgGame, player, screen, playerComputer} from './assets';
import PlayerViewItem from './components/PlayerViewItem';
import PlayerSelect from './components/PlayerSelect';
import Button from './components/Button';

export default class index extends Component {
  render() {
    return (
        <ImageBackground source={bgGame} style={styles.background}>
          <StatusBar barStyle='light-content' />
          <View style={styles.overlay} />
          <SafeAreaView style={styles.container}>
              <View style={styles.playerView}>
                <PlayerViewItem playerImage={player} playerSelectedImage={Rock} />
                <PlayerViewItem playerImage={player} playerSelectedImage={Paper} />
              </View>
              <View style={styles.selectView}>
                <PlayerSelect playerSelectedImage={Rock} />
                <PlayerSelect playerSelectedImage={Paper} />
                <PlayerSelect playerSelectedImage={Rock} />
              </View>
              <View style={styles.infoView}>
                <Text style={styles.infoScore}>Score: 0</Text>
                <Text style={styles.infoTimes}>Times: 10</Text>
              </View>
              <View style={styles.buttonView}>
                <Button title='Play' background='pink' />
                <Button title='Back' background='blue' />
              </View>
          </SafeAreaView>
       </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
      flex: 1,
    },
    overlay: {
      position: 'absolute',
      backgroundColor: '#000',
      opacity: 0.5,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    playerView: {
      flex: 2,
      flexDirection: 'row',
      paddingHorizontal: 20,
      justifyContent: 'space-between',
      paddingTop: 20
    },
    selectView: {
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: 30,
      paddingVertical: 50,
      justifyContent: 'space-between'
    },
    infoView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonView: {
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    infoScore: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#26ddbb'
    },
    infoTimes: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#26ddbb'
    }
});