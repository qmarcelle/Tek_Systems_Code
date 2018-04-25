/*
    To run this code, follow the instructions in the student manual for setting
    up React Native and Expo.  Then copy all of this code into (and replace) the
    code in App.js.
*/

import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View  } from 'react-native';

export default class ContactList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Red Victors'},
                        {key: 'Bob Green'},
                        {key: 'John Brown'},
                        {key: 'Tina O. Range'},
                        {key: 'Berry Blumenthal'},
                        {key: 'Jim Pinkado'},
                        {key: 'Violet Waters'},
                        {key: 'Sandy White'},
                        {key: 'Kay Black'}
                    ]}
                    renderItem={
                        ({item}) => <Text  style={styles.item}>{item.key}</Text>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    },
    item: {
        padding: 10,
        fontSize: 48,
        height: 100,
    },
});
