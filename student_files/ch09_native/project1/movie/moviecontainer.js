import React from 'react';
import { View, FlatList, StyleSheet, TextInput, Text} from 'react-native';

import { Movie } from './movie';


export default class MovieSearch extends React.Component {
    constructor (props) {
        super(props);
        this.state = { movies: [] };
        this.handleSubmitEditing = this.handleSubmitEditing.bind(this);
    }

    handleSubmitEditing(evt){
        let key    = '23cf8b21d9a3bfd615076491d6bae442',
            search = evt.nativeEvent.text,
            url    = `http://api.themoviedb.org/3/search/movie?api_key=${key}&query=${search}`;
        fetch(url)
            .then(response => response.json())
            .then(results => {
                results.results.map( (item) => item.key=item.id );
                this.setState({
                    movies: results.results,
                });
            })
            .catch(errors => console.error('Error detected: ' + errors));
    }

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>
                    Movie Search Phrase
                </Text>
                <TextInput style={styles.textInput}
                           onSubmitEditing={this.handleSubmitEditing}/>
                <FlatList
                    data={this.state.movies}
                    renderItem={
                        ({item}) => <Movie {...item} />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
    },
    textInput: {
        fontSize: 36,
        color: 'firebrick'
    },
    label: {
        fontSize: 36,
        color: 'red',
        height: 50
    }
});