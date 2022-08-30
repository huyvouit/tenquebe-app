import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Theme} from 'constants/theme';

import useTheme from 'hooks/useTheme';
import TextTitle from 'components/TextTitle';
import windowSize from 'constants/windowSize';

export default function RequestOrder(props) {
  const theme = useTheme();
  return (
    <View style={styles(theme).container}>
      <TextTitle title={props.title || '요청사항'} />
      <Text style={styles(theme).name}>{props.name}</Text>
    </View>
  );
}

const styles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      width: `100%`,
      height: 'auto',
      padding: 20,
    },
    name: {
      marginTop: 15,
      fontSize: windowSize.wScale(18),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w400,
      lineHeight: 21.6,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
    },
  });
