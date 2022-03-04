import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import AntIcon from 'react-native-vector-icons/AntDesign'
import TextInput from './components/TextInput'

export default class LoginUI extends Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.hearder}>
                <AntIcon style={styles.headerIcon} name="lock" size={100} />
                <Text style={styles.headerText}>Welcome to Shoes App</Text>
            </View>
            <View style={styles.content}>
                <TextInput title="Email" placeholder="test@gmail.com" />
                <TextInput title="Password" placeholder="*****" secureTextEntry password />
                <TouchableOpacity style={styles.contentButton}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.registerText}>Don't have an account? <Text style={styles.registerNow} onPress={this.props.navigate}>Register now</Text></Text>
            </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    hearder: {
        flex: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerIcon: {
        paddingTop: 70,
        color: '#6330c2', 
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',
        paddingBottom: 10,
        color: '#6330c2', 
    },
    content: {
        flex: 3,
        paddingHorizontal: 20,
    },
    contentEmail: {
        backgroundColor: '#f3f0ee', 
        height: 50, 
        borderRadius: 8, 
        paddingHorizontal: 20, 
        paddingTop: 20
    },
    contentEmailText: {
        color: '#c3c2cc', 
        position: 'absolute', 
        top: 0, 
        left: 40
    },
    contentPassword: {
        backgroundColor: '#f3f0ee', 
        height: 50, 
        borderRadius: 8, 
        paddingHorizontal: 20, 
        paddingTop: 20,
        top: 10,
    },
    contentPasswordText: {
        color: '#c3c2cc', 
        position: 'absolute', 
        top: 60, 
        left: 40
    },
    contentButton: {
        backgroundColor: '#6330c2', 
        height: 50, 
        borderRadius: 8, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    forgotPassword: {
        color: '#6330c2',
        paddingTop: 10,
        alignSelf: 'center',
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
    registerText: {

    },
    registerNow: {
        color: '#6330c2',

    },
});