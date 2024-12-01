import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutUsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title} accessible={true} accessibilityLabel="About Us Title">About Us</Text>
            <Text style={styles.description} accessible={true} accessibilityLabel="About Us Description">
                Kami adalah tim yang berdedikasi untuk memberikan berita terkini dan terpercaya.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default AboutUsScreen;