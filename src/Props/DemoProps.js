import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import {CardItem} from './CardItem';

export default class DemoProps extends Component {
    listStudents = [
        {name: 'Nguyen Van A', age: 18},
        {name: 'Nguyen Van B', age: 19},
        {name: 'Nguyen Van C', age: 20},
        {name: 'Nguyen Van D', age: 21},
        {name: 'Nguyen Van E', age: 22},
        {name: 'Nguyen Van D', age: 23},
        {name: 'Nguyen Van G', age: 24}
    ];

    renderListStudentWithMap = () => {
        return this.listStudents.map((item, index) => {
            const backgroundColor = index % 2 === 0 ? 'green' : 'red';
            return (
            <CardItem
            name={item.name}
            age={item.age}
            backgroundColor={backgroundColor} />
            );
        });
    };

  render() {
    return (
      <View style={styles.container}>
        <Text>Render with Map</Text>
        {this.renderListStudentWithMap}
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