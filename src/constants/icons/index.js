import React from 'react';
import windowSize from 'constants/windowSize';
import {Image, View} from 'react-native';

export function SampleIcon() {
  return (
    <View
      style={{
        width: windowSize.wScale(15),
        height: windowSize.wScale(15),
        resizeMode: 'contain',
      }}
    />
    // <Image
    //   source={require('assets/icons/wallet.png')}
    //   style={{
    //     width: windowSize.wScale(15),
    //     height: windowSize.wScale(15),
    //     resizeMode: 'contain',
    //   }}
    // />
  );
}
