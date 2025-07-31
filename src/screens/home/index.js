import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from '../../../tailwind';

export default function HomeScreen({navigation}) {
  return (
    <View style={tw.style('flex-1 px-6 bg-white items-center justify-center')}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('OnboardingScreen');
        }}
        style={tw.style(
          'bg-green p-3 w-full items-center justify-center rounded mb-6',
        )}>
        <Text style={tw.style('text-white font-montserrat')}>Onboarding</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CheckoutScreen');
        }}
        style={tw.style(
          'bg-green p-3 w-full items-center justify-center rounded mb-6',
        )}>
        <Text style={tw.style('text-white font-montserrat')}>Checkout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('EmptyScreen');
        }}
        style={tw.style(
          'bg-green p-3 w-full items-center justify-center rounded mb-6',
        )}>
        <Text style={tw.style('text-white font-montserrat')}>Empty</Text>
      </TouchableOpacity>
    </View>
  );
}
