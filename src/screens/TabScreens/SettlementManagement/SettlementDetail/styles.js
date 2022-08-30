import {StyleSheet, Dimensions} from 'react-native';

import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      flex: 1,
      paddingTop: 5,
    },

    line: {
      marginVertical: 25,
      //   marginBottom: 10,
      height: 2,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
    },
    body: {
      paddingHorizontal: 20,
    },

    flexbox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    padding_top: {
      paddingTop: 22,
    },
    primary_price: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(30),
      fontWeight: Theme.fonts.fontWeight.w600,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
    sub: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(20),
      fontWeight: Theme.fonts.fontWeight.w600,
    },

    content: {
      marginBottom: 28,
    },
    sub_content: {
      marginHorizontal: 10,
    },

    key: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w600,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
    sub_key: {
      color: Theme.colors.grayText,
      fontSize: windowSize.wScale(16),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    end: {
      marginTop: windowSize.wScale(60),
      marginBottom: 20,
      padding: 20,
      backgroundColor:
        theme == 'light' ? '#F3F7FF' : Theme.colors.primaryBackgroundDark,
    },
    text_end: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      lineHeight: 22,
    },
  });
export default makeStyles;
