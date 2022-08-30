import {StyleSheet, Dimensions} from 'react-native';

import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';

const makeStyles = theme =>
  StyleSheet.create({
    backdrop: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.7)',
    },

    modalView: {
      margin: 0,
      width: '90%',
      height: '40%',
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      borderRadius: 10,
    },

    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 255,
    },

    count: {
      fontSize: windowSize.wScale(30),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w700,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
    },

    direction: {
      marginBottom: 10,
      alignSelf: 'center',
      fontSize: windowSize.wScale(16),
      fontWeight: Theme.fonts.fontWeight.w400,
      color: Theme.colors.primaryText,
    },

    button: {
      marginBottom: 20,
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      alignSelf: 'stretch',
      height: 52,
      fontWeight: Theme.fonts.fontWeight.w700,
      backgroundColor: Theme.colors.blueButton,
    },

    textStyle: {
      color: 'white',
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w700,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    modalText: {
      marginTop: 20,
      paddingBottom: 15,
      fontSize: windowSize.wScale(20),
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      textAlign: 'center',
      fontWeight: Theme.fonts.fontWeight.w700,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      borderBottomWidth: 1,
      borderBottomColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
    },
    buttonChange: {
      height: 56,
      width: 56,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.backgroundInput
          : Theme.colors.primaryBackgroundDark,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
    },
  });
export default makeStyles;
