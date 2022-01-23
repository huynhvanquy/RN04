import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import angry from '../images/angry.png';
import care from '../images/care.png';
import haha from '../images/haha.png';
import like from '../images/like.png';
import love from '../images/love.png';
import sad from '../images/sad.png';

export default class BaiTap03 extends Component {
    img= {
        angry: angry,
        care: care,
        haha: haha,
        like: like,
        love: love,
        sad: sad
    };

    state = {
        image: angry,
        text: 'Đói quá đi mất..',
    };

    onPress = (img, txt) => {
        this.setState({image: img, text: txt})
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Bạn đang cảm thấy như thế nào?</Text>
        <Image style={styles.imgbig} source={this.state.image} />
        <Text style={styles.txtStatus}>{this.state.text}</Text>
        <View style={styles.listitem}>
            <TouchableOpacity onPress={() => this.onPress(this.img.angry, 'Đói quá đi mất..')}>
                <Image style={styles.imgsmall} source={this.img.angry} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPress(this.img.care, 'Đang suy tình..')}>
                <Image style={styles.imgsmall} source={this.img.care} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPress(this.img.haha, 'Đang vui á..')}>
                <Image style={styles.imgsmall} source={this.img.haha} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPress(this.img.like, 'Đang thích bạn đó..')}>
                <Image style={styles.imgsmall} source={this.img.like} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPress(this.img.love, 'Đang yêu nè..')}>
                <Image style={styles.imgsmall} source={this.img.love} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPress(this.img.sad, 'Đang rất buồn..')}>
                <Image style={styles.imgsmall} source={this.img.sad} />
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c7cfbf',
    },
    txt: {
        fontSize: 22,
        fontWeight: '600',
        color: 'black',
    },
    txtStatus: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: '700',
        color: 'blue',
    },
    listitem: {
        flexDirection: 'row',
        marginTop: 20,
    },
    imgbig: {
        width: 120,
        height: 120,
        marginTop: 20,
        borderWidth: 3,
        borderRadius: 60,
        borderColor: "white",
    },
    imgsmall: {
        width: 40,
        height: 40,
        margin: 5,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "white",
    }
});