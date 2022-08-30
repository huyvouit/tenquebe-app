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
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
    },
    main: {
      backgroundColor:
        theme == 'light'
          ? Theme.colors.primaryBackground
          : Theme.colors.primaryBackgroundDark,
      flex: 1,
      marginBottom: 60,
      // paddingTop: 60,
      // paddingBottom: 60,
    },
    text_right: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,

      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w500,
      lineHeight: 21.6,
    },
    body: {
      flex: 1,
      // backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      // marginBottom: 60,
    },
    content: {
      // marginBottom: 60,
      // paddingBottom: 60,s
      // backgroundColor: 'red',
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
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      lineHeight: 30,
      //   marginBottom: 10,
    },
    sub: {
      color: Theme.colors.blackTitle,
      fontSize: windowSize.wScale(20),
      fontWeight: Theme.fonts.fontWeight.w600,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      //   lineHeight: 30,
      //   marginBottom: 10,
    },

    list_button: {
      marginTop: 25,
      marginBottom: windowSize.wScale(40),
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

    //selected
    selected: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      // backgroundColor: 'green',
    },
    selected_box: {
      borderRadius: 7,
      backgroundColor: 'transparent',
      // borderWidth:0,
      // backgroundColor: 'red',
      borderWidth: 0,
      // borderColor: 'gray',
      width: 230,
      // height: 50,
      // alignItems: 'center',
      // padding: 20,
      margin: 20,
    },

    text_date: {
      color: Theme.colors.blackTitle,
      fontSize: windowSize.wScale(16),
      fontWeight: Theme.fonts.fontWeight.w500,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      //   lineHeight: 30,
    },
    drop: {
      position: 'absolute',
      top: 8,
      right: 0,
    },
    //calendar

    calendar: {
      marginBottom: 30,
      flex: 1,
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
  });
export default makeStyles;
