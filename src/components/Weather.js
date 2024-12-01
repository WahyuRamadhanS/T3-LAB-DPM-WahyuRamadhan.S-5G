import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Weather = ({ weather }) => {
    if (!weather) {
        return null; // Jika tidak ada data cuaca, jangan tampilkan apa-apa
    }

    return (
        <View style={styles.container}>
            <Text style={styles.city}>{weather.name}</Text>
            <Text style={styles.temp}>{Math.round(weather.main.temp)}°C</Text>
            <Text style={styles.description}>{weather.weather[0].description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Latar belakang putih dengan transparansi
        borderRadius: 5,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // Untuk efek bayangan di Android
    },
    city: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E90FF', // Warna biru
    },
    temp: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#FF4500', // Warna oranye untuk suhu
    },
    description: {
        fontSize: 18,
        color: '#696969', // Warna abu-abu untuk deskripsi
    },
});

export default Weather;