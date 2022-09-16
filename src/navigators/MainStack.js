import React from "react";
import DeliveryStack from "./DeliveryStack";
import History from "../screens/appscreens/History";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
import Feather from 'react-native-vector-icons/Feather';
export default function HomeStack(){    
    return ( 
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Home') {
                return (
                  <Ionicons
                    name={
                      focused
                        ? 'home'
                        : 'home-outline'
                    }
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Settings') {
                return (
                  <Ionicons
                    name={focused ? 'settings-sharp' : 'settings-outline'}
                    size={size}
                    color={color}
                  />
                );
              }else if (route.name === 'History') {
                return (
                  <Ionicons
                    name={focused ? 'person-sharp' : 'person-outline'}
                    size={size}
                    color={color}
                  />
                );
              }
            },
            headerShown:false,
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: '#34BE82',
          })}>
          <Tab.Screen name="Home" component={DeliveryStack} />
          {/* <Tab.Screen name="cart" component={ClientCart} options={{ unmountOnBlur: true }} /> */}
          <Tab.Screen name="History" component={History} />
        </Tab.Navigator>
     )
}