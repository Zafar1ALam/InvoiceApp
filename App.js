import * as React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import TabNavigation from './src/navigations/TabNavigation';
import InvoiceView from './src/screens/InvoiceView';
import EditCompanyInfo from './src/screens/EditCompanyInfo';

const Stack = createNativeStackNavigator();
const App = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Splash" component={Splash} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="TabNavigation" component={TabNavigation}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="InvoiceView" component={InvoiceView}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="EditProfile" component={EditProfile}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="EditCompanyInfo" component={EditCompanyInfo}
          options={{
            headerShown: false,
          }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};



export default App;