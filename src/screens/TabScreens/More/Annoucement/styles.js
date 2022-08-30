import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      width: `100%`,
      height: '100%',
      flex: 1,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.primaryBackground
          : Theme.colors.primaryBackgroundDark,
    },

    text_right: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,

      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w500,
      lineHeight: 21.6,
    },
    body: {
      flex: 1,
      //   backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 60,
    },
    content: {
      //   marginBottom: 60,
      //   marginTop: 5,
    },
    notify: {
      width: '100%',
      textAlign: 'center',
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      color: Theme.colors.grayText,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    //header_schedule

    header_schedule: {
      paddingTop: 30,
      paddingHorizontal: 20,
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
    },
    header: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(16),
      fontWeight: Theme.fonts.fontWeight.w500,
      lineHeight: 19.2,
      marginBottom: 10,
    },

    price: {
      color: Theme.colors.blueButton,
      fontSize: windowSize.wScale(30),
      fontWeight: Theme.fonts.fontWeight.w600,
      lineHeight: 30,
      //   marginBottom: 10,
    },
    sub: {
      color: Theme.colors.blackTitle,
      fontSize: windowSize.wScale(20),
      fontWeight: Theme.fonts.fontWeight.w600,
      //   lineHeight: 30,
      //   marginBottom: 10,
    },

    list_button: {
      marginTop: 25,
      marginBottom: 30,
    },
    flexbox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default makeStyles;
