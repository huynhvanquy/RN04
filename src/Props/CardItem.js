import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class CardItem extends Component {
  render() {
      const {name, age, backgroundColor} = this.props;
    return (
        <View style={[styles.item, {backgroundColor}]}>
            <Text style={styles.title}>Name: {name}</Text>
            <Text style={styles.content}>Age: {age}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        borderRadius: 5,
        borderWidth: 2,
        width: '90%',
        margin: 10,
        height: 60
    },
    title: {
        fontSize: 20,
        color: 'blue'
    },
    content: {
        fontSize: 18
    }
});