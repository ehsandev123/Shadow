/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {Avatar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

const BottomTabNav = () => {
  return (
    <>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#0f0C0D', '#54293d', '#241618']}
        style={{
          width: '100%',
          borderWidth: 2,
          borderColor: 'red',
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 70,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <View>
            <Feather name="home" color="white" size={20} />
          </View>
          <View>
            <Octicons name="location" color="white" size={20} />
          </View>
          <View>
            <Feather name="search" color="white" size={20} />
          </View>
          <View>
            <AntDesign name="message1" color="white" size={20} />
          </View>
          <View>
            <Avatar.Image
              size={20}
              source={{
                uri: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
              }}
            />
          </View>
        </View>
      </LinearGradient>
    </>
  );
};
export default BottomTabNav;
