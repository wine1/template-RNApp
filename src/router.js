import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './pages/Home'
import ProfileScreen from './pages/Profile'
import ContentScreen from './pages/Content';
import MineScreen from './pages/Mine';
import LoginScreen from './pages/Login';
import GuideScreen from './pages/Guide'
import PageMapScreen from './pages/PageMap'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = ({ route }) => ({
    // tabBarIcon: ({ focused, color, size }) => {
    //     let iconName;

    //     if (route.name === 'Home') {
    //         iconName = focused
    //             ? 'home_selected'
    //             : 'home';
    //     } else if (route.name === 'Content') {
    //         iconName = focused ? 'content_selected' : 'content';
    //     }else if (route.name === 'Mine') {
    //         iconName = focused ? 'mine_selected' : 'mine';
    //     }

    //     // You can return any component that you like here!
    //     return <Ionicons name={iconName} size={size} color={color} />;
    // },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
})


const HomeTabs = () => {
    return <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3}} />
        <Tab.Screen name="Contant" component={ContentScreen} />
        <Tab.Screen name="Mine" component={MineScreen} />
    </Tab.Navigator>
}

export default router = () => {
    return <><NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Index" component={HomeTabs}  options={{ headerShown: false }}/>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Guide" component={GuideScreen} />
            <Stack.Screen name="PageMap" component={PageMapScreen} />
            
        </Stack.Navigator>
        
    </NavigationContainer>
</>
}
