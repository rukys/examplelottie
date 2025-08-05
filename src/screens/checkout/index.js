import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import tw from '../../../tailwind';
import {
  IconAdd,
  IconArrowBack,
  IconArrowRight,
  IconClock,
  IconClose,
  IconDelete,
  IconLocation,
  IconPayment,
  IconRemove,
} from '../../assets/icons';
import {ImgBurger, ImgDonut} from '../../assets/images';
import LottieView from 'lottie-react-native';

export default function CheckoutScreen({navigation}) {
  const [visibleModal, setVisibleModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleModal(true);
    }, 1000);
  };

  return (
    <>
      <View style={tw.style('flex-1 bg-white')}>
        <View
          style={tw.style(
            'flex-row h-14 px-6 bg-white items-center justify-between mb-4',
          )}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconArrowBack />
          </TouchableOpacity>
          <Text style={tw.style('text-base font-montserratSemiBold -ml-5')}>
            Place Order
          </Text>
          <View />
        </View>

        <ScrollView style={tw.style('flex-1')}>
          <View style={tw.style('px-6 mb-4')}>
            <TouchableOpacity
              style={tw.style(
                'flex-row items-center p-1 bordered rounded-3xl border-2 border-grey',
              )}>
              <Image
                source={ImgBurger}
                style={tw.style('h-20 w-24 rounded-l-2xl')}
              />
              <View style={tw.style('p-2 ml-2')}>
                <Text
                  style={tw.style(
                    'text-darkGrey text-base font-montserratMedium mb-3',
                  )}>
                  Classic Burger
                </Text>
                <View style={tw.style('flex-row items-center')}>
                  <Text
                    style={tw.style(
                      'text-black font-montserratSemiBold text-base mr-20',
                    )}>
                    $ 12.75
                  </Text>
                  <TouchableOpacity
                    style={tw.style(
                      'h-8 w-8 bg-grey items-center justify-center rounded-full',
                    )}>
                    <IconRemove />
                  </TouchableOpacity>
                  <Text
                    style={tw.style('mx-2 text-black font-montserratSemiBold')}>
                    2
                  </Text>
                  <TouchableOpacity
                    style={tw.style(
                      'h-8 w-8 bg-grey items-center justify-center rounded-full',
                    )}>
                    <IconAdd />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={tw.style('px-6 mb-8')}>
            <TouchableOpacity
              style={tw.style(
                'flex-row items-center p-1 bordered rounded-3xl border-2 border-grey',
              )}>
              <Image
                source={ImgDonut}
                style={tw.style('h-20 w-24 rounded-l-2xl')}
              />
              <View style={tw.style('p-2 ml-2')}>
                <Text
                  style={tw.style(
                    'text-darkGrey text-base font-montserratMedium mb-3',
                  )}>
                  Donut Box
                </Text>
                <View style={tw.style('flex-row items-center')}>
                  <Text
                    style={tw.style(
                      'text-black font-montserratSemiBold text-base mr-20',
                    )}>
                    $ 13.45
                  </Text>
                  <TouchableOpacity
                    style={tw.style(
                      'h-8 w-8 bg-grey items-center justify-center rounded-full',
                    )}>
                    <IconDelete />
                  </TouchableOpacity>
                  <Text
                    style={tw.style('mx-2 text-black font-montserratSemiBold')}>
                    1
                  </Text>
                  <TouchableOpacity
                    style={tw.style(
                      'h-8 w-8 bg-grey items-center justify-center rounded-full',
                    )}>
                    <IconAdd />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={tw.style(
              'bg-grey flex-row items-center mx-6 rounded-xl p-4 mb-4',
            )}>
            <IconLocation />
            <View style={tw.style('flex-1 ml-3')}>
              <Text
                style={tw.style(
                  'text-black text-sm text-black font-montserrat mb-1',
                )}>
                Deliver to
              </Text>
              <Text style={tw.style('text-black text-sm font-montserrat')}>
                Home - Jl. Gatot Subroto
              </Text>
            </View>
            <IconArrowRight />
          </View>

          <View
            style={tw.style(
              'bg-grey flex-row items-center mx-6 rounded-xl p-4 mb-6',
            )}>
            <IconPayment />
            <View style={tw.style('flex-1 ml-3')}>
              <Text
                style={tw.style(
                  'text-black text-sm text-black font-montserrat mb-1',
                )}>
                Payment from
              </Text>
              <Text style={tw.style('text-black text-sm font-montserrat')}>
                Credit Card - Daniel Jones
              </Text>
            </View>
            <IconArrowRight />
          </View>

          <View style={tw.style('px-6 mb-2')}>
            <View style={tw.style('flex-row items-center justify-between')}>
              <Text style={tw.style('text-base text-black font-montserrat')}>
                Subtotal
              </Text>
              <Text style={tw.style('text-base text-black font-montserrat')}>
                $ 26.20
              </Text>
            </View>
          </View>
          <View style={tw.style('px-6 mb-2')}>
            <View style={tw.style('flex-row items-center justify-between')}>
              <Text style={tw.style('text-base text-black font-montserrat')}>
                Delivery Charges
              </Text>
              <Text style={tw.style('text-base text-black font-montserrat')}>
                $ 2.00
              </Text>
            </View>
          </View>
          <View style={tw.style('h-0.5 mx-6 bg-grey mb-2')} />
          <View style={tw.style('px-6 mb-2')}>
            <View style={tw.style('flex-row items-center justify-between')}>
              <Text
                style={tw.style('text-base text-black font-montserratMedium')}>
                Total
              </Text>
              <Text
                style={tw.style('text-base text-black font-montserratMedium')}>
                $ 28.20
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={tw.style('px-6 flex-row items-center mb-4')}>
          <Text
            style={tw.style(
              'text-black text-lg font-montserratSemiBold ml-4 mr-8',
            )}>
            $ 28.20
          </Text>
          <TouchableOpacity
            onPress={handleSubmit}
            style={tw.style(
              'flex-1 bg-newGreen h-14 rounded-2xl items-center justify-center',
            )}>
            {isLoading ? (
              <ActivityIndicator color={tw.color('white')} />
            ) : (
              <Text
                style={tw.style(
                  'text-white text-base font-montserratSemiBold',
                )}>
                Order Now
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <Modal isVisible={visibleModal}>
        <View style={tw.style('flex-1 -m-6 bg-white p-8')}>
          <View style={tw.style('flex-row items-center justify-between mt-8')}>
            <TouchableOpacity
              style={tw.style('')}
              onPress={() => {
                setVisibleModal(false);
                setIsLoading(false);
              }}>
              <IconClose />
            </TouchableOpacity>
          </View>
          <View style={tw.style('items-center')}>
            <LottieView
              source={require('../../assets/animations/Succesfull Payment.json')}
              autoPlay
              loop
              style={tw.style('w-80 h-80 ')}
            />
            <Text style={tw.style('text-2xl text-black font-montserratBold')}>
              Yay! Your order
            </Text>
            <Text
              style={tw.style('text-2xl text-black font-montserratBold mb-4')}>
              has been placed
            </Text>
            <Text
              style={tw.style(
                'text-base text-center text-black font-montserrat mb-8',
              )}>
              Your order would be delivered in the 30 mins atmost
            </Text>
            <View style={tw.style('flex-row items-center mb-2')}>
              <IconClock style={tw.style('mr-2')} />
              <Text style={tw.style('flex-1 text-black font-montserrat')}>
                Estimated time
              </Text>
              <Text style={tw.style('text-black font-montserrat')}>
                30 mins
              </Text>
            </View>
            <View style={tw.style('flex-row items-center mb-2')}>
              <IconLocation heigth={20} width={20} style={tw.style('mr-2')} />
              <Text style={tw.style('flex-1 text-black font-montserrat')}>
                Deliver to
              </Text>
              <Text style={tw.style('text-black font-montserrat')}>Home</Text>
            </View>
            <View style={tw.style('flex-row items-center mb-2')}>
              <IconPayment heigth={20} width={20} style={tw.style('mr-2')} />
              <Text style={tw.style('flex-1 text-black font-montserrat')}>
                Amount Paid
              </Text>
              <Text style={tw.style('text-black font-montserrat')}>
                $ 28.20
              </Text>
            </View>
            <View style={tw.style('')} />
            <TouchableOpacity
              onPress={() => {
                setVisibleModal(false);
                setIsLoading(false);
              }}
              style={tw.style(
                'bg-newGreen h-14 w-full rounded-2xl items-center justify-center mt-24',
              )}>
              <Text
                style={tw.style(
                  'text-white text-base font-montserratSemiBold',
                )}>
                Track My Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
