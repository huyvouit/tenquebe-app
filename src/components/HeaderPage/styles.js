import {StyleSheet, Dimensions} from 'react-native';

import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      width: Dimensions.get('screen').width,
      height: 45,
      paddingHorizontal: 20,
    },
    borderBottom: {
      borderBottomColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
      borderBottomWidth: 1,
    },

    titlePage: {
      textAlign: 'center',
      fontSize: windowSize.wScale(20),
      fontWeight: Theme.fonts.fontWeight.w700,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: -10,
    },
    right: {},
  });
export default makeStyles;
