import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import React, { Component } from 'react';

export default class BiddingData extends Component {
    textRender = 'Hello React Native';
    txtLogin = 'Should login app first';
    
    state={
        isLogin: false,
    }

    renderLogin = () => {
        if(this.state.isLogin){
            return <Text style={styles.txt}>{this.textRender}</Text>;
        }

        return <Text style={styles.txt}>{this.txtLogin}</Text>;
    }

    onPressLogin = () => {
        this.setState({isLogin: !this.state.isLogin});
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Bidding Data Component</Text>
        {/* #1 */}
        {this.renderLogin()}
        {/* #2 */}
        <Text style={styles.txt}>
            {this.state.isLogin ? this.textRender : this.txtLogin}
        </Text>
        {/* #3 */}
        {
            this.state.isLogin ? (<Text style={styles.txt}>{this.textRender}</Text>) 
            : (<Text style={styles.txt}>{this.txtLogin}</Text>)
        }
        <TouchableOpacity style={styles.btn} onPress={this.onPressLogin}
            underlayColor={'green'}>
                <Text style={{color: 'white'}}>{this.state.isLogin ? 'Logout' : 'Login'}</Text>
        </TouchableOpacity>
        <TouchableHighlight style={styles.btn} onPress={this.onPressLogin}
        underlayColor={'green'}>
            <Text style={{color: 'white'}}>{this.state.isLogin ? 'Logout' : 'Login'}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt:{
        fontSize: 24,
        fontWeight: '700'
    },
    btn: {
        backgroundColor: 'red', 
        height: 50, width: 100, 
        justifyContent: 'center', 
        borderRadius: 8, 
        alignItems: 'center',
        marginVertical: 10,
    }
});