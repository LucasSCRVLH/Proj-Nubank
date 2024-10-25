import Home from "./assets/src/screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Pix from "./assets/src/screens/Pix"
import { ThemeProvider } from './assets/src/Context/ThemeContext';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';


const Stack = createStackNavigator()

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pix"
              component={Pix}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});