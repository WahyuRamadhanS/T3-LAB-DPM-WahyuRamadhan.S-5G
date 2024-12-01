import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import NewsList from '../components/NewsList';
import Weather from '../components/Weather'; // Import komponen cuaca
import { fetchNews, fetchWeather } from '../services/api'; // Import fungsi fetchWeather

class HomeScreen extends Component {
    state = {
        articles: [],
        weather: null,
        loading: true,
    };

    async componentDidMount() {
        const articles = await fetchNews(); // Ambil berita
        const weather = await fetchWeather(); // Ambil cuaca
        this.setState({ articles, weather, loading: false }); // Simpan data ke state
    }

    render() {
        const { loading, articles, weather } = this.state;

        if (loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#ffffff" />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <Weather weather={weather} /> {/* Tampilkan cuaca */}
                <NewsList articles={articles} /> {/* Tampilkan berita */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#87CEEB', // Warna biru langit
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#87CEEB', // Warna biru langit
    },
});

export default HomeScreen;