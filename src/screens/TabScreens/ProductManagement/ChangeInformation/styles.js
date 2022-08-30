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
      width: `100%`,
      height: '100%',
      flex: 1,
    },
    body: {
      flex: 1,
    },

    content: {
      flex: 1,
    },

    button_end: {
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',

      alignSelf: 'stretch',
      height: 56,
      backgroundColor: Theme.colors.blueButton,
    },

    text: {
      color: Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w500,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    input: {
      padding: 20,
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
    },
    normal: {
      marginBottom: 15,
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
    },

    line: {
      height: 1,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
    },

    discount: {
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text_discount: {
      marginLeft: windowSize.wScale(6),
      color: Theme.colors.blueButton,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w500,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      lineHeight: 21.8,
    },

    //button
    label: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w600,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      marginBottom: 15,
    },

    flexbox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    button_state: {
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',
      height: 53,
      width: windowSize.wScale(111),
      borderColor: Theme.colors.grayText,
      borderWidth: 1,
      // backgroundColor: Theme.colors.blueButton,
    },
    button_right: {
      marginRight: 8,
    },

    no_padding: {
      marginBottom: 0,
    },
  });
export default makeStyles;
