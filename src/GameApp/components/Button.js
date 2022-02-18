import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class Button extends Component {
  render() {
      const {title, background} = this.props;
    return (
        <TouchableOpacity>
        <View style={[styles.buttonInfo, {backgroundColor: background}]}>
          <Text style={styles.button}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    buttonInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
        height: 50,
        borderRadius: 20,
      },
      button: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
      }
});