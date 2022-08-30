import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      flex: 1,
      paddingBottom: 60,
    },
    box: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
    },
    search: {
      borderRadius: 28,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.backgroundInput
          : Theme.colors.primaryBackgroundDark,
      marginHorizontal: 20,
      marginTop: 15,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      height: 52,
    },
    text_input: {
      marginLeft: 10,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
    button_clear: {
      position: 'absolute',
      right: windowSize.wScale(10),
    },

    header: {
      alignItems: 'center',
      height: 52,
      paddingHorizontal: 20,
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
    },
    tab: {
      width: 80,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: Theme.colors.grayText,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w500,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
    line: {
      position: 'absolute',
      bottom: 0,
      width: 35,
      height: 2,
      backgroundColor:
        theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      alignSelf: 'center',
    },

    scroll_view: {
      // marginBottom: 60,
      paddingTop: 5,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.primaryBackground
          : Theme.colors.primaryBackgroundDark,
    },

    //empty
    empty: {
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:
        theme == 'light'
          ? Theme.colors.primaryBackground
          : Theme.colors.primaryBackgroundDark,
      // backgroundColor: 'red',
      height: '60%',
      alignContent: 'center',
      // alignSelf: 'center',
    },
    notify: {
      width: '100%',
      textAlign: 'center',
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      color: Theme.colors.grayText,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
  });
export default makeStyles;
