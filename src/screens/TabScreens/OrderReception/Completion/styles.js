import {StyleSheet, Dimensions} from 'react-native';

import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor:
        theme == 'light'
          ? Theme.colors.primaryBackground
          : Theme.colors.primaryBackgroundDark,
      flex: 1,
      paddingTop: 5,
    },

    empty: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:
        theme == 'light'
          ? Theme.colors.primaryBackground
          : Theme.colors.primaryBackgroundDark,
    },
    notify: {
      width: '100%',
      textAlign: 'center',
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      color: Theme.colors.grayText,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
  });
export default makeStyles;
