import React from 'react';
import { FlatList } from 'react-native';
import NewsItem from './NewsItem';

const NewsList = ({ articles }) => {
    return (
        <FlatList
            data={articles}
            renderItem={({ item }) => <NewsItem article={item} />} // Pastikan item di-render dengan benar
            keyExtractor={item => item.url} // Pastikan ini menggunakan key yang unik
            showsVerticalScrollIndicator={false}
        />
    );
};

export default NewsList;