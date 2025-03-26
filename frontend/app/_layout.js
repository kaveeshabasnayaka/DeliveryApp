//_layout.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from './dashboard';
import UserProfileScreen from './user-profile';
import AddOrderScreen from './add-order';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{ title: 'Delivery Dashboard' }}
        />
        <Stack.Screen 
          name="UserProfile" 
          component={UserProfileScreen} 
          options={({ route }) => ({ 
            title: `${route.params.username}'s Profile` 
          })}
        />
        <Stack.Screen 
          name="AddOrder" 
          component={AddOrderScreen} 
          options={({ route }) => ({ 
            title: route.params?.order ? 'Edit Order' : 'Add New Order' 
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}