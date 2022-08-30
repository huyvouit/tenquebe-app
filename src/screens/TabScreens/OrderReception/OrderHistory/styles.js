import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor:
        theme == 'light'
          ? Theme.colors.primaryBackground
          : Theme.colors.primaryBackgroundDark,
    },
    info: {
      paddingHorizontal: 20,
    },
    textInfo: {
      fontSize: windowSize.wScale(16),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w400,
      lineHeight: 19.2,
      color: Theme.colors.grayText,
      marginBottom: 5,
    },
  });
export default makeStyles;
