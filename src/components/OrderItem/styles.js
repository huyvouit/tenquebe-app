import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      // paddingVertical: 20,
      // paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
    },
    touch: {
      paddingVertical: 20,
      paddingBottom: 12,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
    },
    flexbox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      // alignItems: 'center',
      // gap: 10,

      width: '100%',
    },
    flex_start: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flex: 1,
    },

    id: {
      fontSize: windowSize.wScale(16),
      fontWeight: Theme.fonts.fontWeight.w400,
      color: Theme.colors.grayText,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    title: {
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      lineHeight: 21.6,
    },
    status: {
      fontWeight: Theme.fonts.fontWeight.w700,
      color: Theme.colors.grayText,
      // paddingRight: 10,
    },
    color: text => ({
      color:
        text == 'blue'
          ? Theme.colors.blueButton
          : text == 'black'
          ? theme == 'light'
            ? Theme.colors.blackTitle
            : Theme.colors.white
          : Theme.colors.grayText,
    }),
    name: {
      fontSize: windowSize.wScale(20),
      fontWeight: Theme.fonts.fontWeight.w700,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      marginBottom: windowSize.wScale(6),
    },
    desc: textColor => ({
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w600,
      color:
        textColor == 'red'
          ? Theme.colors.redButton
          : textColor == 'blue'
          ? Theme.colors.blueButton
          : Theme.colors.grayText,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    }),
    text_btn: {
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w500,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
    date: textColor => ({
      fontSize: windowSize.wScale(14),
      fontWeight: Theme.fonts.fontWeight.w400,
      color:
        textColor == 'red'
          ? Theme.colors.redButton
          : textColor == 'blue'
          ? Theme.colors.blueButton
          : Theme.colors.grayText,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    }),

    line: {
      // height: '100%',
      height: 1,
      backgroundColor:
        theme == 'light' ? Theme.colors.grayLine : Theme.colors.dark,
    },
    btn: {
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'red',
      height: 52,
      flex: 1,
    },
    left: {
      borderRightWidth: 1,
      borderRightColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
    },
    right: {
      borderLeftWidth: 1,
      borderLeftColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
    },
  });
export default makeStyles;
