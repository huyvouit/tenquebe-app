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
      //   marginTop: 15,
      flex: 1,
      //   height: '100%',

      position: 'relative',
    },

    line: {
      //   marginBottom: 10,
      height: 1,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
    },
    content: {
      //   marginHorizontal: 20,
      //   flex: 1,
      //   height: '100%',
    },
    main: {
      marginBottom: 15,
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
    },
    padding: {
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    flexbox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    list_date: {
      //   marginBottom: 20,
    },

    btn_date: selected => ({
      borderRadius: 9,
      borderColor: selected ? Theme.colors.blueButton : Theme.colors.gray,
      backgroundColor: selected ? '#EAEDFF' : Theme.colors.white,
      borderWidth: 1,
      width: 42,
      height: 53,
      justifyContent: 'center',
      alignItems: 'center',
    }),

    text_date: selected => ({
      color: selected ? Theme.colors.blueButton : Theme.colors.grayText,
      fontSize: windowSize.wScale(16),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    }),

    title: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w600,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      marginBottom: 15,
    },
    delete: {
      color: Theme.colors.redButton,
      marginBottom: 0,
      marginLeft: 4,
    },
    sub: {
      color: Theme.colors.grayText,
      fontSize: windowSize.wScale(14),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    selected_box: {
      borderRadius: 7,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.backgroundInput
          : Theme.colors.primaryBackgroundDark,
      borderWidth: 0,
      height: windowSize.wScale(52),
      width: windowSize.wScale(163),
      alignItems: 'center',
    },
    text_input: {
      color: Theme.colors.grayText,
    },

    add: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      padding: 20,
    },

    text_add: {
      color: Theme.colors.blueButton,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w500,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      marginLeft: 6,
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
      backgroundColor: Theme.colors.blueButton,
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

    // custom select
    text_input1: {
      flex: 1,
      // width: '100%',
      marginRight: 8,
      height: 52,
      borderRadius: 7,
      padding: 15,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.backgroundInput
          : Theme.colors.primaryBackgroundDark,
      position: 'relative',
    },

    drop: {
      position: 'absolute',
      // right: 0,
      bottom: 20,
      right: 15,
    },
  });
export default makeStyles;
