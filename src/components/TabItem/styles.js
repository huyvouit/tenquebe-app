import {StyleSheet} from 'react-native';

import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,

      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
    },

    border_top: {
      borderTopColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
      borderTopWidth: 1,
    },
    border_bottom: {
      borderBottomColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
      borderBottomWidth: 1,
    },
    left: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    dot: {
      marginLeft: 5,
      borderRadius: 100,
      width: 6,
      height: 6,
      backgroundColor: Theme.colors.redButton,
    },
    title: icon => ({
      marginLeft: icon ? 12 : 0,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(20),
      fontWeight: Theme.fonts.fontWeight.w500,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    }),
    sub: {
      color: Theme.colors.blueButton,
    },

    text: {
      color: Theme.colors.grayText,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
  });

export default makeStyles;
