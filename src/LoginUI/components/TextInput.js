import { Text, View, StyleSheet, TextInput as RNTextInput } from 'react-native'
import React, { Component } from 'react'
import EntypoIcon from 'react-native-vector-icons/Entypo'

export default class TextInput extends Component {
  render() {
    const {title, password, erorMsg} = this.props;

    return (
      <View style={styles.wrapperTextInput}>
        <RNTextInput style={styles.textInputContainer} {...this.props} />
        <Text style={styles.textInputTitle}>{title}</Text>
        {password &&
          <EntypoIcon name='eye' color="#bbb" size={20} style={styles.rightIcon} />
        }
        {!!erorMsg && (
          <Text style={{color: 'red', top: 0}}>* {erorMsg}</Text>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapperTextInput: {
    
  },
    textInputContainer: {
        backgroundColor: '#f3f0ee', 
        height: 50, 
        borderRadius: 8, 
        paddingHorizontal: 20, 
        paddingTop: 20,
        marginBottom: 15,
    },
    textInputTitle: {
        color: '#c3c2cc', 
        position: 'absolute', 
        top: 0, 
        left: 20
    },
    rightIcon: {
      position: 'absolute', 
      right: 10, 
      top: 10
    }
});