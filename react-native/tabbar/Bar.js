import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ThemeProvider} from 'styled-components';
import {createStackNavigator} from '@react-navigation/stack';
import theme from "./utils/theme"
import Contact from '../screens/Contact';
import MyTabBar from './tabbar';
import Dashboard from '../screens/Dashboard';
import ProfileScreen from '../screens/Profile';
import MessageList from '../messages/Message-List';


const HomeStack=createStackNavigator();

const Tab=createBottomTabNavigator();

const SearchStack=()=>{
    return(
        <HomeStack.Navigator headerMode="none">
            <HomeStack.Screen name={"Dashboard"} component={Dashboard}/>
            <HomeStack.Screen name={"detail"} component={MessageList}/>
        </HomeStack.Navigator>
    )
};

const Bar = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={"Search"} tabBar={props=><MyTabBar {...props}/>}>
                <Tab.Screen name={"Contact"} component={Contact}/>
                <Tab.Screen name={"Sohbet"} component={SearchStack}/>
                <Tab.Screen name={"Profile"} component={ProfileScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Bar;
