import {
  View,
} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './src/home';
import FindPage from './src/find';
import SettingsPage from './src/Settings';
import ChatPage from './src/Chat';
function Home() {
  return (
    <View
      style={{
        margin: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <HomePage />
    </View>
  );
}

function Find() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FindPage />
    </View>
  );
}
function Settings() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <SettingsPage />
    </View>
  );
}

function Chat() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ChatPage />
    </View>
  );
}
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Find" component={Find} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Chat" component={Chat} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
