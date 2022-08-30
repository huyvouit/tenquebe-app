import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      justifyContent: 'center',
    },

    main: {
      alignItems: 'center',
      flex: 1,
    },
    title: {
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w700,
      fontSize: windowSize.wScale(24),
      alignItems: 'center',
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      textAlign: 'center',
      marginTop: windowSize.wScale(83),
    },

    subTitle: {
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w400,
      fontSize: windowSize.wScale(18),
      alignItems: 'center',
      color: Theme.colors.grayText,
      textAlign: 'center',
      marginTop: windowSize.wScale(20),
    },
    dot: {
      backgroundColor: Theme.colors.gray,
      width: 8,
      height: 8,
      borderRadius: 8,
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: Theme.colors.blueButton,
      width: 15,
      height: 8,
      borderRadius: 8,
      marginHorizontal: 5,
    },
    pagination: {
      position: 'absolute',
      bottom: 150,
    },
    image: {
      marginTop: 50,
      flex: 1,
    },

    //button
    button_end: {
      marginTop: windowSize.wScale(76),
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
