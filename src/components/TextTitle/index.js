import React from 'react';

import {Text, StyleSheet} from 'react-native';

import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import useTheme from 'hooks/useTheme';

export default function TextTitle(props) {
  const theme = useTheme();
  return (
    <Text style={styles(theme).title}>
      {props.title} <Text style={styles(theme).sub}>{props.subTitle}</Text>
    </Text>
  );
}

const styles = theme =>
  StyleSheet.create({
    title: {
      fontSize: windowSize.wScale(18),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w700,
      lineHeight: 21.6,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
    },
    sub: {
      fontSize: windowSize.wScale(14),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w400,
      color: Theme.colors.primaryText,
    },
  });
