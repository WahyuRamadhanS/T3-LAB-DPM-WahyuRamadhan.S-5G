import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NewsItem = ({ article }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.description}>{article.description}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#ffffff', // Latar belakang putih untuk kontras
        borderRadius: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // Untuk efek bayangan di Android
 },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E90FF', // Warna biru untuk judul
    },
    description: {
        fontSize: 14,
        color: '#696969', // Warna abu-abu untuk deskripsi
    },
});

export default NewsItem;