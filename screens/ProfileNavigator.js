import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FollowListScreen from "../screens/FollowListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/Home";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export default function AppNavigator() {
  // ヘッダータイトルコンポーネント
  const title = () => {
    return (
    <View style={styles.navBar}>
          <Image
            style={{width: 120, height: 50}}
            source={require('../assets/mercariLogo.png')}
          />
      </View>
    );
  };
  return (
    
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
            headerShown: false,
            tabBarIcon: () => (<Image source={require("../assets/home.png")} style={{width: 30, height: 30}} />)
        }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
          headerShown: false,
          tabBarIcon: () => (<Image source={require("../assets/human.png")} style={{width: 30, height: 30}} />)
          }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    navBar: {
    //   height: 60,
      width: 300,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor: 'white',
      borderBottomColor: "#d0d0d0",
      borderBottomWidth: 1,
      marginEnd: 0,
    },
})
