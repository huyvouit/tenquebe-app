import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      width: `100%`,
      height: '100%',
      flex: 1,
    },

    body: {
      marginTop: 35,
      flex: 1,
    },

    input: {
      marginBottom: 40,
    },

    flexbox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 20,
      // backgroundColor: tick == id ? '#F3F7FF' : 'transparent',
      borderRadius: 7,
    },

    label: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w700,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      marginBottom: 15,
    },

    require: {
      color: Theme.colors.blueButton,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w600,
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
    },

    drop: {
      position: 'absolute',
      // right: 0,
      bottom: 20,
      right: 15,
    },

    text_bank: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    line: {
      marginTop: 10,
      height: 1,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
    },
    content: {
      marginHorizontal: 20,
      flex: 1,
    },

    content1: {
      marginRight: 5,
    },

    //button
    button_end: {
      marginTop: 16,
      marginBottom: 20,
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      alignSelf: 'stretch',
      height: 56,
      backgroundColor:
        theme == 'light' ? Theme.colors.gray : Theme.colors.grayText,
    },
    complete: {
      backgroundColor: Theme.colors.blueButton,
    },
    text: {
      color: Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w500,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
  });
export default makeStyles;
