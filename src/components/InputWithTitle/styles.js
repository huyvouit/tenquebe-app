import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    input: {
      // marginBottom: 40,
    },
    label: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w700,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      marginBottom: 15,
    },

    sub: {
      color: Theme.colors.grayText,
      fontSize: windowSize.wScale(14),
      fontWeight: Theme.fonts.fontWeight.w400,
    },

    require: {
      color: Theme.colors.blueButton,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w600,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
    flexbox: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    textarea: {
      flex: 1,
      padding: 20,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.backgroundInput
          : Theme.colors.primaryBackgroundDark,
      height: windowSize.wScale(181),
      borderRadius: 7,
      textAlignVertical: 'top',
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.grayText,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
    text_input: {
      flex: 1,
      height: 52,
      borderRadius: 7,
      padding: 15,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.backgroundInput
          : Theme.colors.primaryBackgroundDark,
      position: 'relative',
      fontSize: windowSize.wScale(16),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    button_clear: postion => ({
      position: 'absolute',
      // right: 0,
      right: postion ? windowSize.wScale(postion) : windowSize.wScale(45),
    }),

    button_eye: postion => ({
      position: 'absolute',
      // right: 0,
      right: postion ? windowSize.wScale(postion) : windowSize.wScale(25),
    }),

    currency: {
      marginLeft: 14,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    button_verify: {
      borderRadius: 9,
      borderColor:
        theme == 'light'
          ? Theme.colors.gray
          : Theme.colors.primaryBackgroundDark,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // marginHorizontal: 20,
      marginLeft: 8,
      width: windowSize.wScale(111),
      height: 56,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.white
          : Theme.colors.primaryBackgroundDark,
    },

    text: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w500,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    error: {
      position: 'absolute',
      bottom: -22,
      color: Theme.colors.redButton,
      fontSize: windowSize.wScale(14),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
  });

export default makeStyles;
