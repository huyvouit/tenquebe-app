import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      flex: 1,
      position: 'relative',
    },

    header: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: windowSize.wScale(40),
    },

    image: {
      width: 80,
      height: 80,
      borderRadius: 100,
      marginTop: 20,
      marginBottom: 15,
    },

    name: {
      color: theme == 'light' ? Theme.colors.blueButton : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w600,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      lineHeight: 21.6,
    },
    email: {
      color: Theme.colors.grayText,
      fontSize: windowSize.wScale(16),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    //body
    body: {
      flex: 1,
    },

    content: {
      marginHorizontal: 20,
      flex: 1,
    },

    input: {
      marginBottom: windowSize.wScale(48),
    },

    btn: {
      position: 'absolute',
      bottom: 0,
      //   width: '100%',
      marginHorizontal: 20,
      // flex: 1,
      right: 0,
      left: 0,
    },
    button_end: {
      marginBottom: 20,
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      alignSelf: 'stretch',
      //   width: '100%',
      height: 56,
      backgroundColor: Theme.colors.blueButton,
    },

    text: {
      color: Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w500,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    //remain
    remain: {
      color: Theme.colors.blueButton,
      fontSize: windowSize.wScale(14),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      //   textDecorationLine: 'underline',
      textAlign: 'right',
      marginTop: 10,
    },
  });
export default makeStyles;
