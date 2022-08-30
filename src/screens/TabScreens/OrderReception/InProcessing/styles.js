import {StyleSheet, Dimensions} from 'react-native';

import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: Theme.colors.primaryBackground,
      width: `100%`,
      height: '100%',
      flex: 1,
    },
    notify: {
      width: '100%',
      textAlign: 'center',
      paddingVertical: 10,
      fontSize: windowSize.wScale(14),
      fontWeight: Theme.fonts.fontWeight.w400,
      color: Theme.colors.grayText,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
    itemNotFound: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor:
        theme == 'light'
          ? Theme.colors.primaryBackground
          : Theme.colors.primaryBackgroundDark,
    },
    desNotFound: {
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      color: Theme.colors.grayText,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
  });
export default makeStyles;
