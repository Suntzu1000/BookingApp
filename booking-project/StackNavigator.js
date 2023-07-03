import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const StackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function BottomTabs(){
        return(
            <Tab.Navigator>
                <Tab.Screen name='Inicial' />
            </Tab.Navigator>
        )
    }
  return (
    <View>
      <Text>StackNavigator</Text>
    </View>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})