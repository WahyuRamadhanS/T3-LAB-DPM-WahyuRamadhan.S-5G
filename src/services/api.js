const API_KEY = '28417a085d0347fcb3264a57d4d4e23a'; // Ganti dengan API key Anda
const API_URL = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=' + API_KEY;

const WEATHER_API_KEY = 'a2a25a56d7950accfb7f649bc118aee2'; // Ganti dengan API key cuaca Anda
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=' + WEATHER_API_KEY + '&units=metric';

export const fetchNews = async () => {
    try {
        const response = await fetch(API_URL);
        const json = await response.json();
        console.log(json); // Tambahkan log untuk memeriksa respons
        return json.articles; // Pastikan ini mengembalikan array artikel
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const fetchWeather = async () => {
    try {
        const response = await fetch(WEATHER_API_URL);
        const json = await response.json();
        console.log(json); // Tambahkan log untuk memeriksa respons
        return json; // Kembalikan data cuaca
    } catch (error) {
        console.error(error);
        return null; // Kembalikan null jika ada kesalahan
    }
};