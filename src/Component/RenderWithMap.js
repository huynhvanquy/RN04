import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class RenderWithMap extends Component {
    listStudents = [
        {name: 'Nguyen Van A', age: 18},
        {name: 'Nguyen Van B', age: 19},
        {name: 'Nguyen Van C', age: 20},
        {name: 'Nguyen Van D', age: 21},
        {name: 'Nguyen Van E', age: 22},
        {name: 'Nguyen Van D', age: 23},
        {name: 'Nguyen Van G', age: 24}
    ];

    renderListStudent = () => {
        const jsxArray = [];
        for (let index = 0; index < this.listStudents.length; index++) {
            this.listStudents[index];
            const backgroundColor = index % 2 === 0 ? 'green' : 'red';
            const element = (
                <View key={index} style={[styles.item, {backgroundColor}]}>
                    <Text style={styles.title}>Name: {this.listStudents[index].name}</Text>
                    <Text style={styles.content}>Age: {this.listStudents[index].age}</Text>
                </View>
            );
            jsxArray.push(element);
        }

        return jsxArray;
    }

    renderListStudentWithMap = () => {
        return this.listStudents.map((item, index) => {
            const backgroundColor = index % 2 === 0 ? 'green' : 'red';
            return (
                <View key={index} style={[styles.item, {backgroundColor}]}>
                    <Text style={styles.title}>Name: {item.name}</Text>
                    <Text style={styles.content}>Age: {item.age}</Text>
                </View>
            );
        });
    };

  render() {
    return (
      <View style={styles.container}>
        <Text>Render with Map</Text>
        {this.renderListStudentWithMap()}
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