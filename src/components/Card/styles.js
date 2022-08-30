import {StyleSheet, Dimensions} from 'react-native';

import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';

const makeStyles = theme =>
  StyleSheet.create({
    card: (notBorderBottom, radius) => ({
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      borderBottomWidth: notBorderBottom ? 0 : 1,
      borderRadius: radius ? 15 : 0,
      borderBottomColor:
        theme == 'light' ? Theme.colors.gray : Theme.colors.blackTitle,
      paddingHorizontal: 20,
    }),

    left: {
      flex: 1,

      paddingVertical: 13,
    },

    header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    timestamp: {
      marginStart: 10,
      fontSize: windowSize.wScale(24),
      fontWeight: Theme.fonts.fontWeight.w700,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      color:
        theme == 'light' ? Theme.colors.blackTitle : Theme.colors.whiteTitle,
    },
    title: {
      marginTop: 5,
      fontStyle: 'normal',
      fontSize: windowSize.wScale(24),
      fontWeight: Theme.fonts.fontWeight.w700,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      color:
        theme == 'light' ? Theme.colors.blackTitle : Theme.colors.whiteTitle,
      paddingBottom: 5,
    },

    right: {
      marginLeft: 20,
    },
    active: {
      width: 88,
      height: 53,
      backgroundColor: Theme.colors.blueButton,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 9,
    },
    create: {
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: Theme.colors.grayText,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
    button: {
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w700,
      color: Theme.colors.blackTitle,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
    buttonSubmit: {
      color: '#fff',
    },
    description: {
      fontSize: windowSize.wScale(16),
      lineHeight: 19.2,
      fontWeight: Theme.fonts.fontWeight.w400,
      color: Theme.colors.grayText,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
    total: {
      fontSize: windowSize.wScale(16),
      lineHeight: 19.2,
      fontWeight: Theme.fonts.fontWeight.w400,
      color: Theme.colors.grayText,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    sectionWrapper: {
      justifyContent: 'center',
      alignItems: 'center',

      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      // marginVertical: 8,

      // elevation: 2,
    },
    titleStyle: {
      color:
        theme == 'light' ? Theme.colors.blackTitle : Theme.colors.whiteTitle,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w600,
      lineHeight: 21.6,
    },
  });

export default makeStyles;
