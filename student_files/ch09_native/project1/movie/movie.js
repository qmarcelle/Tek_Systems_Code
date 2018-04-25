import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';

class Movie extends React.Component {

    baseImageURL = 'http://image.tmdb.org/t/p/w185';

    render() {
        let overview = this.props.overview;
        if (overview && overview.length > 100)
            overview = overview.slice(0,48) + '...' + overview.slice(-48);

        return (
            <View style={styles.subcontainer}>
                <View style={styles.column1}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.release}>Release date: {this.props.release_date}</Text>
                    <Text style={styles.overview}>{overview}</Text>
                </View>
                <View style={styles.column2}>
                    <Image source={{uri: this.baseImageURL + this.props.poster_path}}
                           style={styles.img} />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    subcontainer: { flex: 1, flexDirection: 'row', paddingTop: 30 },
    column1: { flex: 3 },
    column2: { flex: 1 },

    title: {
        color: '#58451a',
        padding: 10,
        fontSize: 24,
        height: 50
    },
    release: {
        fontSize: 24
    },
    overview: {
        padding: 10,
        fontSize: 20,
        color: 'firebrick'
    },
    img: {
        width: 185,
        height: 110
    }
});

export { Movie };