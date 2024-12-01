import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AboutUsScreen from './src/screens/AboutUsScreen';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ title: 'Berita Terkini' }} 
            />
        </Stack.Navigator>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeStack} />
                <Drawer.Screen name="About Us" component={AboutUsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;