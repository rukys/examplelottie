import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import tw from '../tailwind';
import Navigations from './navigations';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={tw.style('flex-1 bg-white')}>
          <NavigationContainer>
            <Navigations />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default App;
