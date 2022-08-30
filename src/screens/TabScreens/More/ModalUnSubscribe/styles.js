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
      height: '30%',
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
      justifyContent: 'center',
    },

    count: {
      fontSize: windowSize.wScale(20),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w600,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
    },

    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
    },

    button: {
      marginBottom: 20,
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      height: 56,
      fontWeight: Theme.fonts.fontWeight.w700,
      backgroundColor: Theme.colors.blueButton,
    },

    border: {
      borderWidth: 1,
      borderColor: Theme.colors.gray,
      marginRight: 8,
      backgroundColor: Theme.colors.white,
    },

    text_border: {
      color: Theme.colors.blackTitle,
    },

    textStyle: {
      color: Theme.colors.white,
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
  });
export default makeStyles;
