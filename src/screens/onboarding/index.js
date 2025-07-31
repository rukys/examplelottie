import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LottieView from 'lottie-react-native';
import tw from '../../../tailwind';

const {width} = Dimensions.get('window');
const slides = [
  {
    key: '1',
    title: 'Order Food in Just a Tap',
    subtitle:
      'Craving something? From snacks to full meals, explore a wide range of delicious food right at your fingertips anytime, anywhere.',
    animation: require('../../assets/animations/Food Courier.json'),
  },
  {
    key: '2',
    title: 'Fast Response, No Waiting',
    subtitle:
      "Once you place an order, our system instantly connects with nearby couriers. We work fast so you don't have to wait long your time matters.",
    animation: require('../../assets/animations/Food Courier Accept Order.json'),
  },
  {
    key: '3',
    title: 'Delivered to Your Doorstep',
    subtitle:
      'Track your order in real time and get your food delivered safely, quickly, and with care just the way you like it.',
    animation: require('../../assets/animations/Food Courier Deliver Order.json'),
  },
];

export default function OnboardingScreen() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const renderItem = ({item}) => (
    <View style={[tw.style('items-center w-full px-6'), {width}]}>
      <LottieView
        source={item.animation}
        autoPlay
        loop
        style={tw.style('mt-10 h-96 w-96')}
      />
      <Text
        style={tw.style(
          'mt-8 mb-4 text-xl text-center text-black font-montserratSemiBold',
        )}>
        {item.title}
      </Text>
      <Text
        style={tw.style(
          'text-base text-center text-black font-montserrat mb-14',
        )}>
        {item.subtitle}
      </Text>
    </View>
  );

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({index: currentIndex + 1});
    } else {
      flatListRef.current?.scrollToIndex({index: 0});
      console.log('Get Started Pressed');
      // Navigate to login or main screen here
    }
  };

  return (
    <View style={tw.style('flex-1 bg-white')}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        ref={flatListRef}
      />

      {/* Dot Pagination */}
      <View style={tw.style('flex-row justify-center mb-6')}>
        {slides.map((_, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={index}
              style={[
                tw.style('w-2 h-2 mx-1 rounded-full bg-green'),
                {opacity},
              ]}
            />
          );
        })}
      </View>

      {/* Get Started / Next Button */}
      <View style={tw.style('px-6 mb-6')}>
        <TouchableOpacity
          style={tw.style(
            'items-center justify-center w-full h-10 rounded-lg bg-green',
          )}
          onPress={handleNext}>
          <Text style={tw.style('text-white font-montserratSemiBold')}>
            {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
