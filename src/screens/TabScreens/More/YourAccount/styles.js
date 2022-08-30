import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor:
        theme == 'light'
          ? Theme.colors.primaryBackground
          : Theme.colors.primaryBackgroundDark,
      flex: 1,
    },

    header: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 30,
    },

    image: {
      width: 80,
      height: 80,
      borderRadius: 100,
      marginTop: 20,
      marginBottom: 15,
    },

    name: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
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

    unsub: {
      padding: 20,
    },

    text_unsub: {
      color: Theme.colors.grayText,
      fontSize: windowSize.wScale(20),
      fontWeight: Theme.fonts.fontWeight.w500,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      textDecorationLine: 'underline',
    },
  });
export default makeStyles;
