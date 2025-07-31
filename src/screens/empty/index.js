import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import tw from '../../../tailwind';
import {
  IconArrowBack,
  IconArrowDown,
  IconBox,
  IconSearch,
  IconSetting,
} from '../../assets/icons';
import LottieView from 'lottie-react-native';

const dataInv = [
  {
    key: '1',
    invNumber: 'INV-270725-1NCP5GU',
    orderDate: 'Placed on July 29 2025',
    items: 2,
    price: 'Rp 150.000,00',
  },
  {
    key: '2',
    invNumber: 'INV-250725-1BEP5TU',
    orderDate: 'Placed on July 27 2025',
    items: 1,
    price: 'Rp 68.000,00',
  },
  {
    key: '3',
    invNumber: 'INV-230725-1UHP5GI',
    orderDate: 'Placed on July 25 2025',
    items: 5,
    price: 'Rp 499.000,00',
  },
  {
    key: '4',
    invNumber: 'INV-210725-1RJP5YP',
    orderDate: 'Placed on July 23 2025',
    items: 3,
    price: 'Rp 89.000,00',
  },
];

export default function EmptyScreen({navigation}) {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [filteredData, setFilteredData] = useState(dataInv);

  useEffect(() => {
    setIsTyping(true);

    const timeout = setTimeout(() => {
      const filtered = dataInv.filter(item =>
        item.invNumber.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredData(filtered);
      setIsTyping(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <View style={tw.style('flex-1 bg-grey')}>
      <View
        style={tw.style(
          'flex-row h-14 px-6 bg-white items-center justify-between mb-6',
        )}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconArrowBack />
        </TouchableOpacity>
        <Text style={tw.style('text-base font-montserratSemiBold')}>
          My Order
        </Text>
        <TouchableOpacity>
          <IconSetting />
        </TouchableOpacity>
      </View>

      <View
        style={tw.style(
          'flex-row h-12 bg-white rounded-xl mx-6 items-center px-4 mb-6',
        )}>
        <IconSearch style={tw.style('ml-1')} />
        <TextInput
          value={text}
          onChangeText={setText}
          style={tw.style(
            'flex-1 h-10 text-base mb-1 ml-4 text-black font-montserrat',
          )}
          placeholderTextColor={tw.color('darkGrey')}
          placeholder="Search your invoice"
        />
        {isTyping && <ActivityIndicator color={tw.color('green')} />}
      </View>

      {filteredData.length === 0 && text !== '' ? (
        <View style={tw.style('flex-1 items-center justify-center')}>
          <LottieView
            source={require('../../assets/animations/Empty State.json')}
            autoPlay
            loop
            style={tw.style('w-72 h-72 -mt-48')}
          />
          <Text
            style={tw.style(
              'text-darkGrey font-montserratSemiBold text-base text-center -mt-4 mb-1',
            )}>
            Oops! No invoice found
          </Text>
          <Text style={tw.style('text-darkGrey font-montserrat text-center')}>
            We couldn't find any invoice with that number
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <View
              style={tw.style('flex-row items-center bg-white px-6 py-6 mb-4')}>
              <IconBox />
              <View style={tw.style('flex-1 ml-6')}>
                <Text
                  style={tw.style(
                    'text-black font-montserratSemiBold text-base',
                  )}>
                  {item?.invNumber}
                </Text>
                <Text
                  style={tw.style(
                    'text-darkGrey font-montserrat text-sm mb-4',
                  )}>
                  {item?.orderDate}
                </Text>
                <View style={tw.style('flex-row items-center')}>
                  <Text
                    style={tw.style(
                      'text-xs text-black font-montserratMedium mr-8',
                    )}>
                    Items: {item?.items}
                  </Text>
                  <Text
                    style={tw.style(
                      'text-xs text-black font-montserratMedium',
                    )}>
                    Price: {item?.price}
                  </Text>
                </View>
              </View>
              <IconArrowDown />
            </View>
          )}
        />
      )}
    </View>
  );
}
