import { Text, View, StyleSheet, SectionList } from 'react-native';
import React, { Component } from 'react';

export default class DemoSectionList extends Component {
    listStudents = [
        { title: 'RN 01', data: [{name: 'Nguyen Van A', age: 18},
            {name: 'Nguyen Van B', age: 19},
            {name: 'Nguyen Van C', age: 20},
            {name: 'Nguyen Van D', age: 21}]},
        { title: 'RN 02', data: [{name: 'Nguyen Van A', age: 18},
                {name: 'Nguyen Van B', age: 19},
                {name: 'Nguyen Van C', age: 20},
                {name: 'Nguyen Van D', age: 21},
                {name: 'Nguyen Van E', age: 22}]},
        { title: 'RN 03', data: [{name: 'Nguyen Van A', age: 18},
                {name: 'Nguyen Van B', age: 19},
                {name: 'Nguyen Van C', age: 20},
                {name: 'Nguyen Van D', age: 21},
                {name: 'Nguyen Van E', age: 22},
                {name: 'Nguyen Van D', age: 23},
                {name: 'Nguyen Van G', age: 24}]},
        { title: 'RN 04', data: [{name: 'Nguyen Van A', age: 18},
                {name: 'Nguyen Van B', age: 19},
                {name: 'Nguyen Van C', age: 20},
                {name: 'Nguyen Van D', age: 21},
                {name: 'Nguyen Van E', age: 22},
                {name: 'Nguyen Van D', age: 23},
                {name: 'Nguyen Van G', age: 24},
                {name: 'Nguyen Van E', age: 22},
                {name: 'Nguyen Van D', age: 23},
                {name: 'Nguyen Van G', age: 24},
                {name: 'Nguyen Van E', age: 22},
                {name: 'Nguyen Van D', age: 23},
                {name: 'Nguyen Van G', age: 24}]}
    ];

    renderSectionHeader = ({section}) => {
        return (
            <View>
                <Text style={styles.title}>{section.title}</Text>
            </View>
        );
    };

    renderItem = ({item, index}) => {
        const backgroundColor = index % 2 === 0 ? 'green' : 'red';
        return (
            <View key={index} style={[styles.item, {backgroundColor}]}>
                <Text style={styles.title}>Name: {item.name}</Text>
                <Text style={styles.content}>Age: {item.age}</Text>
            </View>
        );
    };

  render() {
    return (
      <View style={styles.container}>
        <Text>Render with Map</Text>
        <SectionList sections={this.listStudents}
        // contentContainerStyle={{alignItems: 'center'}}
        renderSectionHeader={this.renderSectionHeader}
        stickySectionHeadersEnabled={true}
        renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
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