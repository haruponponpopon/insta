import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FollowListScreen from "../screens/FollowListScreen";
import ProfileScreen from "../screens/ProfileNavigator.js";
import EmmaProfileScreen from "../screens/EmmaProfileScreen.js";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();
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
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{headerTitle: title, headerTitleAlign: 'center'}}
        ></Stack.Screen>
        <Stack.Screen 
        name="FollowList" 
        component={FollowListScreen}
        options={{headerTitle: title, headerTitleAlign: 'center'}}
        ></Stack.Screen>
      <Stack.Screen 
        name="EmmaProfile" 
        component={EmmaProfileScreen}
        options={{headerTitle: title, headerTitleAlign: 'center'}}
        ></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
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
