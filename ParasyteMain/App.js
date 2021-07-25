/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import 'react-native-gesture-handler';
import {HomeA} from './src/modules/ParasyteA/screens';
import {HomeB} from './src/modules/ParasyteB/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeA')}
        style={styles.modules}>
        <Text>Parasyte A</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeB')}
        style={styles.modules}>
        <Text>Parasyte B</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeA" component={HomeA} />
        <Stack.Screen name="HomeB" component={HomeB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modules: {
    backgroundColor: '#ADEFD1FF',
    borderRadius: 4,
    margin: 10,
    paddingHorizontal: 50,
    paddingVertical: 25,
  },
});

export default App;
