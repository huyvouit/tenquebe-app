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
      marginTop: 15,
      flex: 1,
      //   height: '100%',

      position: 'relative',
    },

    input: {
      marginBottom: 40,
    },

    line: {
      marginBottom: 10,
      height: 1,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
    },
    content: {
      marginHorizontal: 20,
      //   flex: 1,
      //   height: '100%',
    },

    //button
    button_end: {
      marginTop: windowSize.wScale(100),
      marginBottom: 20,
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      alignSelf: 'stretch',
      height: 56,
      backgroundColor: Theme.colors.gray,
      //   position: 'absolute',
      //   bottom: 0,
      //   flex: 1,
    },

    text: {
      color: Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w500,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    label: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w600,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      marginBottom: 15,
    },

    //email
    email: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      // marginBottom: 15,
    },
    //direction
    direction: {
      padding: 20,
      borderRadius: 7,
      backgroundColor:
        theme == 'light' ? '#F3F7FF' : Theme.colors.primaryBackgroundDark,
    },

    text_direction: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(16),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      lineHeight: 22,
    },
  });
export default makeStyles;
