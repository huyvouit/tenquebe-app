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
      flex: 1,
    },

    //button
    button_end: {
      marginBottom: 20,
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      alignSelf: 'stretch',
      height: 56,
      backgroundColor:
        theme == 'light' ? Theme.colors.gray : Theme.colors.grayText,
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
    selected_box: {
      borderRadius: 7,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.backgroundInput
          : Theme.colors.primaryBackgroundDark,
      borderWidth: 0,
      height: 52,
      alignItems: 'center',
    },
    text_input: {
      color: Theme.colors.grayText,
    },

    //bottom sheet

    flexbox: (tick, id) => ({
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 20,
      backgroundColor:
        tick == id
          ? theme == 'light'
            ? '#F3F7FF'
            : Theme.colors.primaryBackgroundDark
          : 'transparent',
      borderRadius: 7,
    }),
    left: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: 40,
    },
    text_bank: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
    complete: {
      backgroundColor: Theme.colors.blueButton,
    },

    //selection
    text_input: {
      height: 52,
      borderRadius: 7,
      padding: 15,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.backgroundInput
          : Theme.colors.primaryBackgroundDark,
      position: 'relative',
      fontSize: windowSize.wScale(16),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    drop: {
      position: 'absolute',
      // right: 0,
      bottom: 20,
      right: 15,
    },
  });
export default makeStyles;
