import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper/src';

import makeStyles from './styles';
import Icons from 'assets/icons';
import useTheme from 'hooks/useTheme';
import {SvgXml} from 'react-native-svg';
import Route from 'constants/navigationRoute';

const SplashScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <SvgXml xml={Icons.Logo} />
      <View style={{marginTop: 30}}>
        <SvgXml xml={Icons.TextLogo} />
      </View>
    </View>
  );
};

export default SplashScreen;
1;
