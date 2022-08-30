import {StyleSheet, Dimensions} from 'react-native';

import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor:
        theme == 'light'
          ? Theme.colors.primaryBackground
          : Theme.colors.primaryBackgroundDark,
    },
    info: {
      paddingHorizontal: 20,
    },
    textInfo: {
      fontSize: windowSize.wScale(16),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w400,
      lineHeight: 19.2,
      color: Theme.colors.grayText,
      marginBottom: 5,
    },
    button_end: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      paddingTop: 10,
    },
    button: {
      marginBottom: 20,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
      // marginHorizontal: 20,
      alignSelf: 'stretch',
      height: 52,
      fontWeight: Theme.fonts.fontWeight.w700,
      backgroundColor: Theme.colors.blueButton,
      flex: 1,
    },
    outline: {
      borderWidth: 1,
      borderColor: Theme.colors.grayText,
      backgroundColor: Theme.colors.white,
      marginRight: 10,
    },
    textBtn: {
      fontSize: windowSize.wScale(18),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w500,
      lineHeight: 19.2,
      color: Theme.colors.white,
    },
    text_outline: {
      color: Theme.colors.blackTitle,
    },
  });
export default makeStyles;
