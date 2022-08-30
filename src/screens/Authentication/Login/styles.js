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
    logo: {
      justifyContent: 'center',
      alignItems: 'center',
      height: windowSize.wScale(300),
    },

    text: {
      marginTop: windowSize.wScale(30),
    },

    input: {
      marginHorizontal: 20,
      marginBottom: 30,
    },

    button_end: {
      marginBottom: 20,
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      alignSelf: 'stretch',
      height: 56,
      backgroundColor: Theme.colors.blueButton,
    },

    text_btn: {
      color: Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w500,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
    wrapper: {
      //
      justifyContent: 'center',
      alignItems: 'center',
    },
    flex: {
      //   width: '100%',
      width: windowSize.wScale(250),
      flexDirection: 'row',
      justifyContent: 'center',
      justifyContent: 'space-around',
      alignItems: 'center',
    },

    line: {
      width: 1,
      height: 20,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
    },

    text_find: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(16),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
  });
export default makeStyles;
