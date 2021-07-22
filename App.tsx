import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
import { PermissionProvider } from './src/context/PermissionContext';


const AppState = ({ children }: any) => {
  return (
    <PermissionProvider>
      {children}
    </PermissionProvider>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator/>
      </AppState>
    </NavigationContainer>
  );
}

export default App;