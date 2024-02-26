import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import ThemeProvider from './context/ThemeProvider';
import Settings from './screens/Settings'
import Home from './screens/Home'
import MainAppBar from './components/MainAppBar'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <PaperProvider>
      <ThemeProvider>
        <NavigationContainer>
          <StatusBar backgroundColor="#75538C" barStyle="light-content" />
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
              header: (props) =>
                <MainAppBar {...props} backgroundColor="#75538C" icon="cog" color="#DBAFC1" />
            }}>
            <Stack.Screen name=" ">
              {() =>
                <Home />
              }
            </Stack.Screen>
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}