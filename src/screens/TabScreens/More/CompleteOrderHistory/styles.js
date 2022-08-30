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
      justifyContent: 'center',
      alignItems: 'center',
    },

    content: {
      marginTop: 5,
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
      paddingTop: 20,
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
    text_input1: {
      marginRight: 8,
      height: 52,
      borderRadius: 7,
      paddingHorizontal: 15,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.backgroundInput
          : Theme.colors.primaryBackgroundDark,

      position: 'relative',

      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
    },

    btn_search: {
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',

      height: 52,
      width: windowSize.wScale(82),
      backgroundColor: Theme.colors.blueButton,
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
      marginTop: 15,
      marginBottom: 20,
      // backgroundColor: 'red',
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
      height: 42,
      width: windowSize.wScale(81.31),
      borderColor: Theme.colors.gray,
      borderWidth: 1,
    },
    button_right: {
      marginRight: 7.69,
    },

    text_button: {
      color: Theme.colors.grayText,
    },

    //button bottom sheet
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

    text: {
      color: Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w500,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    //order tab
    card: {
      justifyContent: 'space-around',
      // alignItems: 'center',
      flexDirection: 'row',
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      borderBottomWidth: 1,
      borderBottomColor:
        theme == 'light' ? Theme.colors.gray : Theme.colors.blackTitle,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },

    left: {
      flex: 1,
    },

    header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    timestamp: {
      marginStart: 10,
      lineHeight: 21.6,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w700,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      color:
        theme == 'light' ? Theme.colors.blackTitle : Theme.colors.whiteTitle,
    },
    title: {
      marginTop: 10,
      fontStyle: 'normal',
      fontSize: windowSize.wScale(20),
      fontWeight: Theme.fonts.fontWeight.w700,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      color:
        theme == 'light' ? Theme.colors.blackTitle : Theme.colors.whiteTitle,
      paddingBottom: 5,
    },

    right: {
      marginTop: 10,
      marginLeft: 20,
    },

    description: {
      fontSize: windowSize.wScale(16),
      lineHeight: 21.6,
      fontWeight: Theme.fonts.fontWeight.w400,
      color: Theme.colors.grayText,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
  });
export default makeStyles;
