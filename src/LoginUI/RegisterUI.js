import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native'
import React, { Component } from 'react'
import AntIcon from 'react-native-vector-icons/AntDesign'
import TextInput from './components/TextInput'
import axios from 'axios';

export default class RegisterUI extends Component {
    state = {
        email: '',
        password: '',
        name: '',
        phone: '',
        gender: 1,
    };

    onChangeText = (value, key) => this.setState({[key]: value});

    onSubmit = async() => {
        try
        {
            const result = await axios({method: 'POST', url: 'http://svcy3.myclass.vn/api/Users/signup',
                data: this.state});
            console.log(result);
            Alert.alert('Success!');
        }
        catch(error)
        {
            Alert.alert('Please input information!');
            console.log(error);
        }
    }

    validateData = () => {
        const {email, password, name, phone} = this.state;

        if(email!== ''){

        }
    }

  render() {
      const {email, password, name, phone} = this.state;
      console.log(this.state);
    return (
        <SafeAreaView style={styles.container}>
            <AntIcon style={styles.backIcon} name="left" size={50} onPress={this.props.navigate} />
            <View style={styles.hearder}>
                <AntIcon style={styles.headerIcon} name="lock" size={100} />
                <Text style={styles.headerText}>Register new account</Text>
            </View>
            <View style={styles.content}>
                <TextInput title="Email" placeholder="test@gmail.com" value={email}
                 onChangeText={value => this.onChangeText(value, 'email')} erorMsg="Loi" />
                <TextInput title="Password" placeholder="*****" secureTextEntry password value={password}
                onChangeText={value => this.onChangeText(value, 'password')} />
                <TextInput title="Name" placeholder="Nguyen Van A" value={name}
                onChangeText={name => this.onChangeText(value, 'name')} />
                <TextInput title="Phone" placeholder="09xx.xxx.xxx" value={phone}
                onChangeText={value => this.onChangeText(value, 'phone')} />

                <TouchableOpacity style={styles.contentButton} onPress={this.onSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <Text style={styles.textButton}>You have account already? <Text style={styles.login} onPress={this.props.navigate}>Login</Text></Text>
            </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backIcon: {
        paddingLeft: 10
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
        fontWeight: '500',
        paddingBottom: 10,
        color: '#6330c2', 
    },
    content: {
        flex: 4,
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
    textButton: {
        paddingTop: 10,
        alignSelf: 'center',
    },
    login: {
        color: '#6330c2',
    }
});