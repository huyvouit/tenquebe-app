import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';

import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = (theme, fontDefault) =>
  StyleSheet.create({
    modalView: {
      width: '100%',
      height: '100%',
      // backgroundColor: 'red',
      // color:
      backgroundColor:
        theme == 'light'
          ? Theme.colors.primaryBackground
          : Theme.colors.primaryBackgroundDark,
      flex: 1,
    },

    body: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
    },

    content: {
      marginTop: 53,
      flex: 1,
    },

    top: {
      margin: 20,
      borderRadius: 15,
      // backgroundColor: 'red',
      // height: '100%',
      // width: '100%',
    },
    count: {
      fontSize: windowSize.wScale(30),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w700,
      color: Theme.colors.blackTitle,
    },

    direction: {
      marginTop: 20,
      marginBottom: 10,
      alignSelf: 'center',
      fontSize: windowSize.wScale(Theme.fonts.fontSize[fontDefault].font16),
      fontWeight: Theme.fonts.fontWeight.w400,
      color: Theme.colors.grayText,
      textAlign: 'center',
    },
    btn: {
      // paddingTop: 100,
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'center',
      width: '100%',
    },
    buttonClose: {
      marginBottom: 20,
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',
      // alignSelf: 'stretch',
      height: 52,
      width: 101,
      borderWidth: 1,
      borderColor: Theme.colors.blueButton,
      fontWeight: Theme.fonts.fontWeight.w700,
      backgroundColor: Theme.colors.white,
      marginRight: 10,
    },
    button: {
      marginBottom: 20,
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',
      // alignSelf: 'stretch',
      // width: '100%',
      flex: 1,
      height: 52,
      fontWeight: Theme.fonts.fontWeight.w700,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.gray
          : Theme.colors.primaryBackgroundDark,
    },
    buttonBg: {
      backgroundColor: Theme.colors.blueButton,
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
      color: Theme.colors.blackTitle,
      textAlign: 'center',
      fontWeight: Theme.fonts.fontWeight.w700,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      borderBottomWidth: 1,
      borderBottomColor: '#E3E4E9',
    },

    item_radio: {
      paddingBottom: 40,
    },
    no_padding: {
      paddingBottom: 20,
    },

    text_input: {
      height: 109,
      // borderWidth: 1,
      borderRadius: 7,
      padding: 15,
      textAlignVertical: 'top',
      borderColor: Theme.colors.gray,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.backgroundInput
          : Theme.colors.primaryBackgroundDark,
    },
  });
export default makeStyles;
